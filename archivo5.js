var alimenta = require(process.argv[2])
var test = require('tape')

test('aceptado',function(t){
	t.plan(2);
	t.equal(alimenta('comida'),'yum');
 t.throws(alimenta.bind(null,'chocolate'));
});