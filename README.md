[![Build Status](https://travis-ci.org/neuron-js/neuron-ejs-compiler.svg?branch=master)](https://travis-ci.org/neuron-js/neuron-ejs-compiler)
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/neuron-ejs-compiler.svg)](http://badge.fury.io/js/neuron-ejs-compiler)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/neuron-ejs-compiler.svg)](https://www.npmjs.org/package/neuron-ejs-compiler)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/neuron-js/neuron-ejs-compiler.svg)](https://david-dm.org/neuron-js/neuron-ejs-compiler)
-->

# neuron-ejs-compiler

The ejs compiler module for neuron

## Install

```sh
$ npm install neuron-ejs-compiler --save
```

## Usage

```js
var ejs_compiler = require('neuron-ejs-compiler');
var builder = require('neuron-builder');

builder(entry, {
  pkg: pkg,
  cwd: cwd,
  compilers: [{
    test: /\.ejs$/,
    compiler: ejs_compiler,
    options: ejs_options
  }]
}, function(err, content){
  // if no `err`, `content` will be the bundled content.
});
```

see [neuron-builder](https://www.npmjs.com/package/neuron-builder) for more details.

### `ejs_options`

Default specified options for `jade`

- filename: will always be the filename of the current file
- compileDebug: `false`
- rmWhitespace: `true` removes all safe-to-remove whitespace.

Other options are not set by default, see [here](http://jade-lang.com/api/) for details

## License

MIT
