var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-type': 'text/html'});
	res.write('Html Header here!!');
	res.end();
}).listen(80);
