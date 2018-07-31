var fs = require('fs');
fs.appendFile('mynewfile.txt','this is my text.',function(err){
	if(err) throw err; 
	console.log('updated!!!');
});