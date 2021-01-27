const esbuild = require("esbuild");
const sveltePlugin = require("esbuild-svelte");

esbuild
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [sveltePlugin()],
    logLevel: "info",
    sourcemap: true,
    minify: true,
  })
  .catch(() => process.exit(1));
