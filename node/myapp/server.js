var http = require('http');
var server = http.createServer((function(request,response){
    response.writeHead(200,{
        "Contrnt-Type":"text/plain"
    });
    response.end("My Server\n");
}));
server.listen(3000);
console.log('listening @ 3000');