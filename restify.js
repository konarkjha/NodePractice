	const config  = require('./config'),
      restify = require('restify'),
      mysql      = require('mysql')
	  
	  var connection = config.db.get;

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/employees', function (req, res) {
   connection.query('select * from employee', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});