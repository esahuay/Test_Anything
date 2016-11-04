var alimenta = require(process.argv[2])
var test = require('tape')

test('aceptado',function(t){
	t.plan(3);
	t.equal(alimenta('comida'),'yum');
	t.equal(alimenta('pez'),'yum');
	t.throws(alimenta.bind(null,'chocolate'));
	t.end()
});
