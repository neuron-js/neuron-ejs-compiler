'use strict'

module.exports = compile

const ejs = require('ejs')
const set = require('set-options')

const DEFAULT_OPTIONS = {
  compileDebug: false,
  rmWhitespace: true,
  _with: false,
  strict: true
}

function compile (content, options, callback) {
  options = set(options, DEFAULT_OPTIONS)

  ejs.localsName = options.localsName || 'it'

  // force `options.client` to `true` to build a standalone compiled function
  options.client = true

  let result

  try {
    result = ejs.compile(content, options).toString()
  } catch(e) {
    return callback(e)
  }

  let code = `module.exports = anonymous;\n${result}`

  callback(null, {
    code,
    // map: ejs does not support sourcemap yet
    // ast: actually, ejs have no ast
    js: true
  })
}
