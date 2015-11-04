'use strict';

var expect = require('chai').expect;
var compiler = require('../');
var node_path = require('path');
var fs = require('fs');

var file = node_path.join(__dirname, 'fixture/sample.ejs');

compiler(fs.readFileSync(file).toString(), {
  filename: file

}, function (err, result) {
  console.log(err);
  console.log(typeof result.content);
  console.log(result.content.toString())
});