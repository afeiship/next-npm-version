/*!
 * name: @feizheng/next-npm-version
 * description: Get npm package version.
 * homepage: https://github.com/afeiship/next-npm-version
 * version: 1.0.0
 * date: 2020-05-20T12:52:12.238Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var npmInstalled = require('@feizheng/next-npm-installed');
  var execSync = require('child_process').execSync;

  nx.npmVersion = function (inName) {
    if (npmInstalled(inName)) {
      var buf = execSync('npm view ' + inName + ' version')
      return buf.toString().trim();
    }
    return null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmVersion;
  }
})();

//# sourceMappingURL=next-npm-version.js.map
