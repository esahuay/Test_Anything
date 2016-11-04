var modulo = require(process.argv[2])
var assert = require('assert')

console.log(modulo.toString())
assert(modulo(42))