var http = require('http');

	http.createServer(function(req,res){
	res.write('Inbuilt Module Running');
	res.end();
	}).listen(80);