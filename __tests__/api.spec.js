const nx = require('@feizheng/next-js-core2');
require('../src/next-npm-version');

describe('api.basic test', () => {
  describe('api.basic test', () => {
    test.only('pageckage exist should return semver.', function () {
      var ver = nx.npmVersion('@feizheng/next-js-core2');
      console.log(ver, typeof ver);
      expect(ver.includes('.')).toBe(true);
    });

    test('react exist should return semver.', function () {
      var ver = nx.npmVersion('react');
      expect(ver.includes('.')).toBe(true);
    });

    test('pageckage not exist should return null.', function () {
      var ver = nx.npmVersion('@feizheng/next-js-core111');
      expect(ver).toBe(null);
    });
  });
});
