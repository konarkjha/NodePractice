//var path = require('./config');
var restify = require('restify');
const config = require('./config.js');
var connection = config.db.get;
const server = restify.createServer({
    name    : config.name,
    version : config.version,
    url : config.hostname
});
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
  server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.get('/employees', function (req, res) {
   connection.query('select * from employee', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
});


