# desktop-web-app template

desktop-web-app template to clone that use Deno, Websocket, Htm & Preact.

App example :
- https://github.com/jersou/docker-compose-dashboard  (it's the origin of the template)

Features :
- no build step (if run locally)
- use Deno for the backend
- the frontend use Htm & Preact (no frontend build)
- open the browser at startup (optionally)
- websocket to detect frontend close and send data continuously
- detect backend stop from frontend
- optionally bundle frontend assets to run the app from web import

## update assez bundle
update [assets_bundle.json](assets_bundle.json) after frontend/* changes, use `--update`.
```shell
deno run -A ./desktop-web-app.ts --open-in-browser --update
```

## Usage

```
$ ./desktop-web-app.ts --help
Usage: <desktop-web-app file> [Options] [command [command args]]

Commands:
main          (default)
updateAssets

Options:
--hostname=<HOSTNAME>                            (default "localhost")
--port=<PORT>                                    (default "5555")
--not-exit-if-no-client=<NOT_EXIT_IF_NO_CLIENT>  (default "false")
--open-in-browser=<OPEN_IN_BROWSER>              (default "false")
--update=<UPDATE>                                update assets_bundle.json (default "false")
--help                                           Show this help
```

## dep
  - https://github.com/denoland/deno
  - https://github.com/developit/htm
  - https://github.com/preactjs/preact
  - https://github.com/denoland/deno
