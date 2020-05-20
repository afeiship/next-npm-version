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
