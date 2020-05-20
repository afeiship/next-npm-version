# next-npm-version
> Get npm package version.

## installation
```bash
npm install -S @feizheng/next-npm-version
```

## usage
```js
import '@feizheng/next-npm-version';

nx.npmVersion('@feizheng/next-js-core2');
// '2.4.4'

nx.npmVersion('@feizheng/next-js-core2xxx');
// null
```
