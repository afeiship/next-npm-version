const nx = require('@feizheng/next-js-core2');
require('../src/next-npm-version');

describe('api.basic test', () => {
  test('pageckage exist should return semver.', function () {
    var ver = nx.npmVersion('@feizheng/next-js-core2');
    expect(ver.includes('.')).toBe(true);
  });

  test('pageckage not exist should return null.', function () {
    var ver = nx.npmVersion('@feizheng/next-js-core111');
    expect(ver).toBe(null);
  });
});
