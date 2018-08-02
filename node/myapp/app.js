var express = require('express');
var http = require('http');

var pool = require('./database/db_config_mysql')();

var router = require('./routes/routes');

var app = express();

require('./routes/routes')(app);


app.listen(process.env.PORT||3000);
console.log("app listening on port 3000 ");




module.exports = app;
