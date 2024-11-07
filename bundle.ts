#!/usr/bin/env -S deno run -A

import * as esbuild from "npm:esbuild@0.24.0";
// Import the Wasm build on platforms where running subprocesses is not
// permitted, such as Deno Deploy, or when running without `--allow-run`.
// import * as esbuild from "https://deno.land/x/esbuild@0.20.2/wasm.js";

import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@0.11.0";

import $ from "jsr:@david/dax@0.42.0";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./example2.ts"],
  outfile: "./dist/example2.bundle.ts",
  bundle: true,
  format: "esm",
});

console.log(result.outputFiles);

const tsBundlePath = $.path("./dist/example2.bundle.ts");

const transformResult = await esbuild.transform(
  await tsBundlePath.readText(),
  {
    target: "es2015",
    // minify: true,
  },
);

await $.path("./dist/example2.bundle.esm.js").writeText(transformResult.code);
console.log({ warnings: transformResult.warnings });

await tsBundlePath.remove();
esbuild.stop();

// TODO bundleApp() function
