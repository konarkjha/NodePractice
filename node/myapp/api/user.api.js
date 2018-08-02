var pool = require("../database/db_config_mysql");
module.exports = function(app, pool){ 
    

    console.log("inside user");
    app.get('/a', function (req, res) {  
    
       pool.getConnection(function(err,connection){
        if (err)
        return res.send(400);
           connection.query('SELECT * FROM users', function (err, rows) {  
                if (!err) {  
                    console.log(rows);  
                    res.json(rows);  
                }  
                else {  
                    console.error("From users.api.js :" + err);  
                    res.json(err);  
                }  ;
                connection.release();  
            })
        })  
     })
};