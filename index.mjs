import { fetch, setGlobalDispatcher, ProxyAgent } from "undici";

const proxyServer = process.env["https_proxy"] || process.env["HTTPS_PROXY"];
if (proxyServer) {
  setGlobalDispatcher(new ProxyAgent(proxyServer));
}

if (!Object.keys(global).includes("fetch")) {
  Object.defineProperty(global, "fetch", { value: fetch });
}
