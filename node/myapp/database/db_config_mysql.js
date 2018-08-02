var mysql = require('mysql');

module.exports = function handel_db(req,res){
    var pool = mysql.createPool({

        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password:'',
        database:'mydb'
    });

    pool.getConnection(function(err,connection){
        if(err){
            console.error("error!! while connecting to db: "+ err);
            connection.release;
        }

        console.log("from db config: connected as id: "+ connection.threadId);
        connection.on('error',function(err){
            res.json({"code":100,"status":"Error in connection db: "});
            return;
        
    });
    return connection;
});
return pool;
console.log("poolsend");
};
