var mysql = require('mysql');
app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'konarkjha'
    });
    res.locals.connect();
    next();
});