import type { fetch } from "undici";
declare global {
  namespace NodeJS {
    interface Global {
      fetch: typeof fetch;
    }
  }
}
