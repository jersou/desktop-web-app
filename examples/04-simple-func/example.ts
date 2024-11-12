#!/usr/bin/env -S deno run --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets.json --allow-run

import { runDesktopWebApp } from "../../desktop-web-app.ts";
import assetsFromJson from "./assets.json" with { type: "json" };

runDesktopWebApp({
  routes: [
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
  ],
  assetsFromJson,
  openInBrowser: true,
  openInBrowserAppMode: true,
});
