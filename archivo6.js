var alimenta = require(process.argv[2])
var test = require('tape')

test('acceptado',function(t){
	try {
    	alimenta('chocolate')
   	} 
   	catch(err) {
    	console.error('no se alimenta')
   	}
   		t.equal(alimenta(),'yum')
    
})