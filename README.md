# desktop-web-app

Easily create a desktop (web) app... It serves a static dir and handle a routes array.


## Features

- use Deno for the backend
- open the browser at startup (optionally)
- optionally bundle frontend assets to run the app from web import
- can be run from http (no need of install/clone)
- example 2 & 3
  - the frontend use Htm & Preact (no frontend build)
  - no build step (if run locally)
  - websocket to detect frontend close and send data continuously
  - detect backend stop from frontend

## Usage

With `runDesktopWebApp()`
```typescript
// examples/02-WebSocket-runDesktopWebApp/example2.ts
const server = new ExampleServer();
runDesktopWebApp({
  routes: server.routes,
  assetsFromJson,
  onListen: server.onListen,
  openInBrowser: true,
  openInBrowserAppMode: true,
});
```

Or extends DesktopWebApp :
```typescript
// examples/03-bundled/example3.ts
class ExampleServer extends DesktopWebApp {
  override routes = [
    // ...
  ];
  // ...
}
cliteRun(ExampleServer, { mainFile: "desktop-web-app", dontPrintResult: true });
```

## Update asset bundle

To update [assets_bundle.json](assets_bundle.json) after frontend/* changes, use
`--update`.

```shell
deno run -A ./example.ts --open-in-browser --update
```

or `updateAssetsBundle` command

```shell
deno run -A ./example.ts updateAssetsBundle
```

## Hot reload dev

```shell
deno run -A --watch='*.ts,frontend/' --watch-exclude=assets_bundle.json ./example.ts --update --notExitIfNoClient=true
```

## Run from http

```shell
deno run --allow-net=localhost:5555 https://raw.githubusercontent.com/jersou/desktop-web-app/refs/heads/main/examples/03-bundled/example3.ts
# → Open http://localhost:5555/ in a browser
```

## Usage (example 3)

```
$ ./examples/03-bundled/example3.ts --help                  
Usage: desktop-web-app [Options] [--] [command [command args]]

Commands:
  main             [default]
  commandFromChild Command from example

Options:
 -h, --help                     Show this help                                                        [default: false]
     --hostname                 Server hostname                                                 [default: "localhost"]
     --port                     Server port                                                            [default: 5555]
     --open-in-browser          Open with chromium/chrome/gio if true or with the parameter [default: "google-chrome"]
     --open-in-browser-app-mode Add --app= to browser command if openInBrowser is used                 [default: true]
     --not-exit-if-no-client    Keep the server alive after the last client disconnects               [default: false]
     --option-from-child        Option from example                                                     [default: 123]
```

