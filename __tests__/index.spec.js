(function () {
  require('../src');

  describe('api.basic test', () => {
    test.only('pageckage exist should return semver.', function () {
      var ver = nx.npmVersion('@jswork/next');
      console.log(ver, typeof ver);
      expect(ver.includes('.')).toBe(true);
    });

    test('react exist should return semver.', function () {
      var ver = nx.npmVersion('react');
      expect(ver.includes('.')).toBe(true);
    });

    test('pageckage not exist should return null.', function () {
      var ver = nx.npmVersion('@jswork/next-js-core2');
      expect(ver).toBe(null);
    });
  });

})();
