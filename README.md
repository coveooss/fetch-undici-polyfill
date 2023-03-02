# fetch-undici-polyfill

Polyfill fetch with [undici](https://github.com/nodejs/undici) implementation on NodeJS.

## Usage

Install: `npm i fetch-undici-polyfill`

Code:

```js
// ESM import
import "fetch-undici-polyfill";
// CJS require
require("fetch-undici-polyfill");

fetch("https://nyan.cat");
```

## Proxy configuration

Supports the environment variable `HTTPS_PROXY` and `https_proxy`.
Read more about it [here](https://about.gitlab.com/blog/2021/01/27/we-need-to-talk-no-proxy/).
