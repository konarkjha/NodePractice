const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparse = require('body-parser');
app.use(bodyparse.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'konarkjha'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB Connection Successfull!!');
    else 
    console.log('DB Connection Failed \n Error: '+ JSON.stringify(err,undefined,2));

});

app.listen(3000,()=>console.log('Express server is running at port no : 3000'));

app.get('/employees',(res,req)=>{
    mysqlConnection.query('SELECT * from Employee',(err,rows,fields)=>{
        if(!err)
        console.log('rows');
        else 
        console.log(err);
        
       
    })
    clearTimeout(app);
});
clearTimeout(app);