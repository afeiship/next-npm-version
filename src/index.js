(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var execSync = require('child_process').execSync;

  nx.npmVersion = function (inName) {
    try {
      var buf = execSync('npm show ' + inName + ' version');
      return buf.toString().trim();
    } catch (e) {
      return null;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmVersion;
  }
})();
