var fs=require('fs');
fs.writeFile('myfile2.txt','Hello content!!!',function(err){
	if(err)throw err;
	console.log('Saved!!!');
});