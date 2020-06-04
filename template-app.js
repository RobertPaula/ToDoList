// jshint esversion:6


// My modules:
const express = require("express");
const bodyParser = require("body-parser");



// My App:
   const app = express();

   app.get('/', function(req, res) {
      
      res.send('hello');
      
   });


      // port heroku or local on 4000
      app.listen(4000, function(){ // A DYNAMIC PORT that Heroku will define on the go
         console.log('This Server is Running on Port 4000 For the ToDo App!');
   })