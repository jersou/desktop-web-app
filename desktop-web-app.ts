import { assert } from "jsr:@std/assert@1.0.5";
import { decodeBase64, encodeBase64 } from "jsr:@std/encoding@1.0.5";
import { walk } from "jsr:@std/fs@1.0.3";
import { contentType } from "jsr:@std/media-types@1.0.3";
import { extname } from "jsr:@std/path@1.0.6";
import $ from "jsr:@david/dax@0.42.0";
import { cliteRun, help } from "jsr:@jersou/clite@0.7.4";
import assetsFromJson from "./assets_bundle.json" with { type: "json" };

type Assets = {
  [k: string]: { type: string; content: Uint8Array; route: URLPattern };
};
type AssetsJson = {
  [k: string]: { type: string; content: string; route: string };
};

export type Route = {
  route: URLPattern;
  exec: (
    match: URLPatternResult,
    request: Request,
  ) => Response | Promise<Response>;
};

export interface ServerType {
  routes: Route[];
  onListen?: (params: { hostname: string; port: number }) => unknown;
}

export class DesktopWebApp {
  @help("Server hostname")
  hostname = "localhost";
  @help("Server port")
  port = 5555;
  @help("Keep the server alive after the last client disconnects")
  notExitIfNoClient = false;
  @help("Open with chromium/chrome/gio if true or with the parameter")
  openInBrowser: boolean | string = false;
  @help("Add --app= to browser command if openInBrowser is used")
  openInBrowserAppMode = false;
  @help("Update the frontend bundle before launching the server")
  update = false;

  #server: ServerType;
  #assets: Assets = {};

  constructor(server: ServerType) {
    this.#server = server;
  }

  async main() {
    await this.#loadAssets();
    const onListen = (params: { hostname: string; port: number }) => {
      this.port = params.port;
      this.hostname = params.hostname;
      console.log(`Listen on ${this.hostname}:${this.port}`);
      this.#server.onListen?.(params);
      this.#openInBrowser();
    };
    const { hostname, port } = this;
    const handler = (r: Request) => this.#handleRequest(r);
    Deno.serve({ hostname, port, onListen }, handler);
  }

  async #openInBrowser() {
    if (this.openInBrowser) {
      const arg = this.openInBrowserAppMode ? "--app=" : "";
      if (this.openInBrowser === true) {
        if (await $.commandExists("chromium")) {
          await $`chromium ${arg}http://${this.hostname}:${this.port}/`;
        } else if (await $.commandExists("google-chrome")) {
          await $`google-chrome ${arg}http://${this.hostname}:${this.port}/`;
        } else {
          await $`gio open http://${this.hostname}:${this.port}/`;
        }
      } else if (typeof this.openInBrowser === "string") {
        await $`${this.openInBrowser} ${arg}http://${this.hostname}:${this.port}/`;
      }
    }
  }

  async #handleRequest(request: Request) {
    console.log(`handle ${request.url}`);
    for (const { route, exec } of this.#server.routes) {
      const match = route.exec(request.url);
      if (match) {
        return exec(match, request);
      }
    }
    for (const file of Object.values(this.#assets)) {
      if (file.route?.exec(request.url)) {
        const headers = { "Content-Type": file.type };
        return new Response(file.content, { status: 200, headers });
      }
    }
    return new Response("", { status: 404 });
  }

  @help("update assets_bundle.json from frontend/ files")
  async updateAssetsBundle() {
    console.log("update assets_bundle.json");
    const assets = await getAssetsFromFolder(`frontend/`);
    await writeAssets(assets, "./assets_bundle.json");
    return assets;
  }

  async #loadAssets() {
    this.#assets = this.update === true
      ? await this.updateAssetsBundle()
      : assetsFromJsonObj(assetsFromJson);
    if (this.#assets["/index.html"]) {
      const route = new URLPattern({ pathname: "/" });
      this.#assets["/"] = { ...this.#assets["/index.html"], route };
    }
  }
}

async function getAssetsFromFolder(path: string): Promise<Assets> {
  const assetsUnordered: Assets = {};
  const frontendPath = $.path(path).resolve().toString();
  for await (const entry of walk(frontendPath, { includeDirs: false })) {
    assert(entry.path.startsWith(frontendPath));
    const path = entry.path.substring(frontendPath.length);
    const type = contentType(extname(path)) ?? "";
    const content = await Deno.readFile(entry.path);
    const route = new URLPattern({ pathname: path });
    assetsUnordered[path] = { type, route, content };
    console.log({ path, type });
  }
  const paths = Object.keys(assetsUnordered).sort();
  const assets: Assets = {};
  paths.forEach((path) => (assets[path] = assetsUnordered[path]));
  return assets;
}

async function writeAssets(assets: Assets, path: string) {
  const replacer = (key: string, value: unknown) =>
    key === "content"
      ? encodeBase64(value as Uint8Array)
      : ((key === "route") ? (value as URLPattern).pathname : value);
  await $.path(path).writeText(JSON.stringify(assets, replacer, "  "));
}

function assetsFromJsonObj(jsonObj: AssetsJson) {
  const assets: Assets = {};
  Object.entries(jsonObj)
    .forEach(([key, asset]) => (assets[key] = {
      type: asset?.type,
      route: new URLPattern({ pathname: asset.route }),
      content: decodeBase64(asset.content),
    }));
  return assets;
}

export function runDesktopWebApp(server: ServerType){
  cliteRun(new DesktopWebApp(server), { mainFile: "desktop-web-app", dontPrintResult: true });
}
