'use strict';

module.exports = compile;

var ejs = require('ejs');
var mix = require('mix2');

// var COMMONJS_TEMPLATE = ''

// module.exports = function(locals){
//   <%-  %>
// }

function compile (content, options, callback) {
  options = mix({
    compileDebug: false,
    rmWhitespace: true,
    _with: false,
    strict: true
  }, options);

  ejs.localsName = options.localsName || 'it'

  // force `options.client` to `true` to build a standalone compiled function
  options.client = true;

  try {
    var result = ejs.compile(content, options);
  } catch(e) {
    return callback(e);
  }

  callback(null, {
    content: 'module.exports = anonymous;\n' + result.toString(),
    js: true
  });
}
