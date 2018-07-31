var fs = require('fs');
fs.writeFile('myfile2.txt',' write content!!!',function(err){
	if(err)throw err;
	console.log('Replaced!!');
});