var express = require('express');
var router = express.Router();
module.exports = function(app,pool){
    
    console.log("Hello");

    require('../api/user.api')(app,pool); 
 app.get('/',function(req,res){
        console.log("there");
        res.send("welcome to my api: ");
    });
};