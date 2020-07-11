# next-npm-version
> Get npm package version.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-npm-version
```

## usage
```js
import '@feizheng/next-npm-version';

nx.npmVersion('@feizheng/next-js-core2');
// '2.6.0'

nx.npmVersion('@feizheng/next-js-core2xxx');
// null
```

## resources
- https://stackoverflow.com/questions/11949419/npm-how-to-show-the-latest-version-of-a-package

## license
Code released under [the MIT license](https://github.com/afeiship/next-npm-version/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-npm-version
[version-url]: https://npmjs.org/package/@feizheng/next-npm-version

[license-image]: https://img.shields.io/npm/l/@feizheng/next-npm-version
[license-url]: https://github.com/afeiship/next-npm-version/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-npm-version
[size-url]: https://github.com/afeiship/next-npm-version/blob/master/dist/next-npm-version.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-npm-version
[download-url]: https://www.npmjs.com/package/@feizheng/next-npm-version
