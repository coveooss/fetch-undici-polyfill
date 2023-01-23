import { test } from "node:test";
import assert from "node:assert";

const versionMatcher = /^v(?<major>\d*).(?<minor>\d*).(?<patch>\d*)$/;

const isNodeVersionLgt18 = () =>
  parseInt(versionMatcher.exec(process.version).groups.major) >= 18;

isNodeVersionLgt18()
  ? test("fetch exists", () => {
      assert(typeof fetch !== "undefined");
    })
  : test("fetch does not exists", () => {
      assert(typeof fetch === "undefined");
    });
