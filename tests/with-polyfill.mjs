import { test } from "node:test";
import assert from "node:assert";
import { getGlobalDispatcher, ProxyAgent } from "undici";

// Act
await import("fetch-undici-polyfill");

// Assert
test("fetch exists", () => {
  assert(typeof fetch !== "undefined");
});

test("proxy is not set", () => {
  assert(!(getGlobalDispatcher() instanceof ProxyAgent));
});
