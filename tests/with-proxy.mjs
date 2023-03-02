import { test } from "node:test";
import assert from "node:assert";
import { getGlobalDispatcher, ProxyAgent } from "undici";

// Arrange
process.env["HTTPS_PROXY"] = "https://foo.com";

// Act
await import("fetch-undici-polyfill");

// Assert
test("fetch exists", () => {
  assert(typeof fetch !== "undefined");
});

test("proxy is set", () => {
  assert(getGlobalDispatcher() instanceof ProxyAgent);
});
