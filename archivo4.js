var repeatCallback = require(process.argv[2])
var test = require('tape')

test('acceptado',function(t){
	t.plan(1)
	repeatCallback(1,function(){
		t.pass('callback')
	})
})