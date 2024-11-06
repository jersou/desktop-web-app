#!/usr/bin/env -S deno run  --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets_bundle.json --allow-run
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

class WebUiApp {
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

  #server?: Deno.HttpServer;
  #sockets = new Set<WebSocket>();
  #assets: Assets = {};
  #wsRoute = new URLPattern({ pathname: "/api/events-ws" });
  #routes = [
    { // example
      route: new URLPattern({ pathname: "/api/status" }),
      exec: async (_match: URLPatternResult, request: Request) => {
        if (request.method !== "GET") {
          return new Response(null, { status: 405 });
        }
        const body = { status: "up", b: await request.text() };
        return new Response(JSON.stringify(body), { status: 200 });
      },
    },
    { // example
      route: new URLPattern({ pathname: "/api/element/:id" }),
      exec: async (match: URLPatternResult, request: Request) => {
        const elemnt = match.pathname.groups.id;
        const body = { elemnt, b: await request.text() };
        return new Response(JSON.stringify(body), { status: 200 });
      },
    },
  ] as const;

  #sendWs(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    this.#sockets.forEach((s) => s.send(data));
  }

  async main() {
    await this.#loadAssets();
    const onListen = (params: { hostname: string; port: number }) => {
      setInterval(() => this.#sendWs(new Date().toISOString()), 1000); // example
      this.port = params.port;
      this.hostname = params.hostname;
      console.log(`Listen on ${this.hostname}:${this.port}`);
      this.#openInBrowser();
    };
    const { hostname, port } = this;
    const handler = (r: Request) => this.#handleRequest(r);
    this.#server = Deno.serve({ hostname, port, onListen }, handler);
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
    for (const { route, exec } of this.#routes) {
      const match = route.exec(request.url);
      if (match) {
        return await exec(match, request);
      }
    }
    for (const file of Object.values(this.#assets)) {
      if (file.route?.exec(request.url)) {
        const headers = { "Content-Type": file.type };
        return new Response(file.content, { status: 200, headers });
      }
    }
    if (this.#wsRoute.exec(request.url)) {
      return this.#handleWsRequest(request);
    }
    return new Response("", { status: 404 });
  }

  #handleWsRequest(request: Request) {
    if (request.headers.get("upgrade") != "websocket") {
      return new Response(null, { status: 501 });
    }
    const { socket, response } = Deno.upgradeWebSocket(request);
    socket.addEventListener("open", () => {
      this.#sockets.add(socket);
      console.log(`a client connected! ${this.#sockets.size} clients`);
    });
    socket.addEventListener("close", () => {
      this.#sockets.delete(socket);
      console.log(`a client disconnected! ${this.#sockets.size} clients`);
      if (!this.notExitIfNoClient && this.#sockets.size === 0) {
        console.log(`→ ExitIfNoClient → shutdown the server !`);
        this.#server?.shutdown().then();
        Deno.exit(0);
      }
    });
    return response;
  }

  @help("update assets_bundle.json from frontend/ files")
  async updateAssets() {
    console.log("update assets_bundle.json");
    const assetsUnordered:Assets={}
    const frontendPath = $.path(import.meta.url).resolve(`../frontend/`)
      .toString();
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
    const replacer = (key: string, value: unknown) =>
      key === "content"
        ? encodeBase64(value as Uint8Array)
        : ((key === "route") ? (value as URLPattern).pathname : value);
    const assetPath = $.path(import.meta.url).resolve("../assets_bundle.json");
    await assetPath.writeText(JSON.stringify(assets, replacer, "  "));
    this.#assets = assets
  }

  async #loadAssets() {
    if (this.update === true) {
      await this.updateAssets();
    } else {
      Object.entries(assetsFromJson)
        .forEach(([key, asset]) => (this.#assets[key] = {
          type: asset?.type,
          route: new URLPattern({ pathname: asset.route }),
          content: decodeBase64(asset.content),
        }));
    }
    if (this.#assets["/index.html"]) {
      const route = new URLPattern({ pathname: "/" });
      this.#assets["/"] = { ...this.#assets["/index.html"], route };
    }
  }
}

cliteRun(WebUiApp, { mainFile: "desktop-web-app" });
