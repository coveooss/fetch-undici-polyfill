import type { fetch as fetchUndici } from "undici";
declare global {
  var fetch: typeof fetchUndici;
}
