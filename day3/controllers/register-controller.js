var Cryptr = require('cryptr');
var request = require("request");
var express=require('express');
var app=express();

var connection = require('./../config');


module.exports.register=function(req,res){
    var today = new Date();
    
  var encryptedString = cryptr.encrypt(req.body.password);
  console.log('register');
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      
        if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
