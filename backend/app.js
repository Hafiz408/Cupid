
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const alert = require('alert'); 

const app = express();

app.use(express.static("build"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our own Cupid.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/cupidDB", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
    email: String,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res){
    res.sendFile(__dirname+"/mainpage.html");
});

app.get("/login", function(req, res){
    res.sendFile(__dirname+"/login.html");
});

app.get("/register", function(req, res){
    res.sendFile(__dirname+"/sign_up.html");
});

app.get("/cupid", function(req, res){
  if (req.isAuthenticated()){
    // res.render("cupid");
    res.sendFile(__dirname+"/build/index.html");
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

app.post("/register", function(req, res){

        User.register({username: req.body.username}, req.body.password, function(err, user){
            if (err) {
              console.log(err);
              alert("Mail ID already exists. Try logging in !!");
              res.redirect("/register");
            } else {
                passport.authenticate("local")(req, res, function(){
                    res.redirect("/cupid");
                  });
            }
          });

});

app.post("/login", function(req, res){

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/cupid");
      });
    }
  });

});


app.listen(9200,function(){
    console.log("Server running at port 9200");
})