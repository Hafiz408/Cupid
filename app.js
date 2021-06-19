const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/mainpage.html");
})

app.post("/",function(req,res){
    res.sendFile(__dirname+"/mainpage.html");
})

app.post("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
})

app.post("/signup",function(req,res){
    res.sendFile(__dirname+"/sign_up.html");
})

app.listen(9200,function(){
    console.log("Server running at port 9200");
})