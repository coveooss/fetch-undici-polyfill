import "fetch-undici-polyfill";
import { test } from "node:test";
import assert from "node:assert";


test("fetch exists", () => {
  assert(typeof fetch !== "undefined");
});
