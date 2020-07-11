/*!
 * name: @feizheng/next-npm-version
 * description: Get npm package version.
 * homepage: https://github.com/afeiship/next-npm-version
 * version: 1.1.0
 * date: 2020-07-11T04:51:05.769Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var execSync = require('child_process').execSync;

  nx.npmVersion = function (inName) {
    try {
      var buf = execSync('npm show ' + inName + ' version');
      return buf.toString().trim();
    } catch (e) { }
    return null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmVersion;
  }
})();
