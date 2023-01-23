# fetch-undici-polyfill

Polyfill fetch with [undici](https://github.com/nodejs/undici) implementation on NodeJS.

## Usage

Install: `npm i fetch-undici`

Code: 
```js
// ESM import
import 'fetch-undici';
// CJS require
require('fetch-undici');

fetch('https://nyan.cat');
```