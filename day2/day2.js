var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'konarkjha'
});

console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response) 
{ 
        console.log('Creating the http server');
        connection.query('SELECT * from Employee', function(err, rows, fields)
        {
                console.log('Connection result error '+err);
                console.log('no of records is '+rows.length);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.end(JSON.stringify(rows));
                response.end();
        }); 

}).listen(3000);