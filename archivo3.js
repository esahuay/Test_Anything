var fancify = require(process.argv[2])
var test = require('tape')

test('acceptado',function(t){
	t.equal(fancify("Hello"),"~*~Hello~*~","iguales")
	t.equal(fancify("Hello",true),"~*~HELLO~*~","iguales")
	t.equal(fancify("Hello",false,'!'),"~!~Hello~!~","iguales")
	t.end()
})