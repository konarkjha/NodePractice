var express = require('express'),
http = require('http'),
app = express(),
mysql = require('mysql'),
bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
  
});
app.get('/insert',function(req,res){
    res.render("insert");
});
app.post("/insert",function(req,res){
    user.insert(new User({name: req.body.name},req.body.subject,function(err,user){
        if(err){
            console.log(err)
            return res.render("insert");
        }

    }));
})
app.listen(3000);
console.log("Running at Port 3000");