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
console.log(URL);
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB Connection Successfull!!');
    else 
    console.log('DB Connection Failed \n Error: '+ JSON.stringify(err,undefined,2));
    console.log(err);
});
console.log(mysqlConnection);
app.listen(3000,()=>console.log('Express server is running at port no : 3000'));

app.get('/employee',(res,req)=>{
    mysqlConnection.query('SELECT * from Employee',(err,rows,fields)=>{
        console.log(res);
        if(!err)
        console.log(rows);
        else 
        console.log(err);
        
       
    })
    
});
