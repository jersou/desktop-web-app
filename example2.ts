#!/usr/bin/env -S deno run  --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets_bundle.json --allow-run

import { DesktopWebApp } from "./desktop-web-app.ts";
import assetsFromJson from "./assets_bundle.json" with { type: "json" };
import { cliteRun,help,hidden } from "jsr:@jersou/clite@0.7.5";

class ExampleServer extends DesktopWebApp {
  @hidden()
  sockets = new Set<WebSocket>();

  @help("Option from example")
  optionFromChild=123

  override routes = [
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
    { // WebSocket
      route: new URLPattern({ pathname: "/api/events-ws" }),
      exec: (_match: URLPatternResult, request: Request) => {
        if (request.headers.get("upgrade") != "websocket") {
          return new Response(null, { status: 501 });
        }
        const { socket, response } = Deno.upgradeWebSocket(request);
        socket.addEventListener("open", () => {
          this.sockets.add(socket);
          console.log(`a client connected! ${this.sockets.size} clients`);
        });
        socket.addEventListener("close", () => {
          this.sockets.delete(socket);
          console.log(`a client disconnected! ${this.sockets.size} clients`);
          if (!this.notExitIfNoClient && this.sockets.size === 0) {
            console.log(`→ ExitIfNoClient → shutdown the server !`);
            Deno.exit(0);
          }
        });
        return response;
      },
    },
  ];

  override onListen = () => {
    console.log("onListen from ExampleServer");
    setInterval(() => this.#sendWs(new Date().toISOString()), 1000); // example
  };

  #sendWs(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    this.sockets.forEach((s) => s.send(data));
  }

  constructor() {
    super({ assetsFromJson });
  }
}

cliteRun(ExampleServer, {
  mainFile: "desktop-web-app",
  dontPrintResult: true,
});
