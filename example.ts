#!/usr/bin/env -S deno run  --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets_bundle.json --allow-run

import { runDesktopWebApp, ServerType } from "./desktop-web-app.ts";

class ExampleServer implements ServerType {
  notExitIfNoClient = false;
  sockets = new Set<WebSocket>();
  routes = [
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
    {
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

  sendWs(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    this.sockets.forEach((s) => s.send(data));
  }

  onListen = () => {
    console.log("onListen", this);
    setInterval(() => this.sendWs(new Date().toISOString()), 1000); // example
  };
}

runDesktopWebApp(new ExampleServer())
