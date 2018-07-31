'use strict'
var server = require('server');
var mysql = require('mysql');

module.exports = {
    name: 'rest-api',
    hostname : 'http://localhost/phpmyadmin',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    db: {
        get : mysql.createConnection({
			host     : 'localhost',
			user     : 'root',
			password : '',
			database : 'konarkjha'
		})
    }
}