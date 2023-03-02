import { run } from "node:test";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = ["with-proxy.mjs", "with-polyfill.mjs", "without-polyfill.mjs"].map(
  (testFile) => resolve(__dirname, testFile)
);

run({ files }).pipe(process.stdout);
