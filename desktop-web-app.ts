#!/usr/bin/env -S deno run  --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets_bundle.json --allow-run

import { assert } from "jsr:@std/assert@1.0.5";
import { decodeBase64, encodeBase64 } from "jsr:@std/encoding@1.0.5";
import { walk } from "jsr:@std/fs@1.0.3";
import { contentType } from "jsr:@std/media-types@1.0.3";
import { extname } from "jsr:@std/path@1.0.6";
import $ from "jsr:@david/dax@0.42.0";
import { cliteRun } from "jsr:@jersou/clite@0.3.2";
import assetsFromJson from "./assets_bundle.json" with { type: "json" };

type Assets = {
  [k: string]: { type: string; content: Uint8Array; route: URLPattern };
};

class WebUiApp {
  hostname = "localhost";
  port = 5555;
  notExitIfNoClient: boolean | string = false;
  openInBrowser: boolean | string = false;
  openInBrowserAppMode: boolean | string = false;
  _update_desc = "update assets_bundle.json";
  update: boolean | string = false;
  #server: Deno.HttpServer | undefined;
  #sockets = new Set<WebSocket>();
  #assets: Assets = {};
  #wsRoute = new URLPattern({ pathname: "/api/events-ws" });
  #routes = [
    {
      // example
      route: new URLPattern({ pathname: "/api/status" }),
      exec: async (_match: URLPatternResult, request: Request) => {
        const body = { status: "up", b: await request.text() };
        return new Response(JSON.stringify(body), { status: 200 });
      },
    },
    {
      // example
      route: new URLPattern({ pathname: "/api/element/:id" }),
      exec: async (match: URLPatternResult, request: Request) => {
        const id = match.pathname.groups.id;
        const body = { elemnt: id, b: await request.text() };
        return new Response(JSON.stringify(body), { status: 200 });
      },
    },
  ] as const;

  #sendWs(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    this.#sockets.forEach((s) => s.send(data));
  }

  async main() {
    await this.#loadAssets();
    const onListen = async (params: { hostname: string; port: number }) => {
      // example
      setInterval(() => this.#sendWs(new Date().toISOString()), 1000);
      this.port = params.port;
      this.hostname = params.hostname;
      console.log(`Listen on ${this.hostname}:${this.port}`);
      if (this.openInBrowser && this.openInBrowser !== "false") {
        this.#openInBrowser().then();
      }
    };
    this.#server = Deno.serve(
      { hostname: this.hostname, port: this.port, onListen },
      (r) => this.#handleRequest(r),
    );
  }

  async #openInBrowser() {
    const appMode = this.openInBrowserAppMode === true ||
      this.openInBrowserAppMode === "true";
    const arg = appMode ? "--app=" : "";
    if (this.openInBrowser === true || this.openInBrowser === "true") {
      if (await $.commandExists("chromium")) {
        await $`chromium ${arg}http://${this.hostname}:${this.port}/`;
      } else if (await $.commandExists("google-chrome")) {
        await $`google-chrome ${arg}http://${this.hostname}:${this.port}/`;
      } else {
        await $`gio open http://${this.hostname}:${this.port}/`;
      }
    } else {
      await $`${this.openInBrowser} ${arg}http://${this.hostname}:${this.port}/`;
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
    for (const file of Object.values(this.#assets ?? {})) {
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
      if (
        (this.notExitIfNoClient === false ||
          this.notExitIfNoClient === "false") && this.#sockets.size === 0
      ) {
        console.log(`→ ExitIfNoClient → shutdown server !`);
        this.#server?.shutdown().then();
        // or Deno.exit(0);
      }
    });
    return response;
  }

  async updateAssets() {
    console.log("update assets_bundle.json");
    const frontendPath = $.path(import.meta.url).resolve(`../frontend/`)
      .toString();
    for await (const entry of walk(frontendPath, { includeDirs: false })) {
      assert(entry.path.startsWith(frontendPath));
      const path = entry.path.substring(frontendPath.length);
      const ext = extname(path);
      const type = contentType(ext) ?? "";
      const content = await Deno.readFile(entry.path);
      const route = new URLPattern({ pathname: path });
      this.#assets[path] = { type, route, content };
      console.log({ path, type });
    }
    const paths = Object.keys(this.#assets).sort();
    const assets: Assets = {};
    paths.forEach((path) => (assets[path] = this.#assets[path]));
    await Deno.writeTextFile(
      $.path(import.meta.url).resolve("../assets_bundle.json").toString(),
      JSON.stringify(assets, (key, value) => {
        if (key === "content") {
          return encodeBase64(value as Uint8Array);
        } else if (key === "route") {
          return (value as URLPattern).pathname;
        } else {
          return value;
        }
      }, "  "),
    );
  }

  async #loadAssets() {
    if (this.update === true || this.update === "true") {
      await this.updateAssets();
    } else {
      for (const [key, asset] of Object.entries(assetsFromJson)) {
        this.#assets[key] = {
          type: asset?.type,
          route: new URLPattern({ pathname: asset.route }),
          content: decodeBase64(asset.content),
        };
      }
    }
    if (this.#assets["/index.html"]) {
      const route = new URLPattern({ pathname: "/" });
      this.#assets["/"] = { ...this.#assets["/index.html"], route };
    }
  }
}

if (import.meta.main) {
  cliteRun(new WebUiApp());
}
