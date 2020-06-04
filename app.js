// jshint esversion:6


// // My modules:
// const express = require("express");
// const bodyParser = require("body-parser");



// // My App:
//    const app = express();

//    app.get('/', function(req, res) {
      
//       var today = new Date();
//       var currentDay = today.getDay();
      
      
//    });


//       // port heroku or local on 4000
//       app.listen(4000, function(){ // A DYNAMIC PORT that Heroku will define on the go
//          console.log('This Server is Running on Port 4000 For the ToDo App!');
//    })

let express = require('express');
const bodyParser = require("body-parser");

// My App:
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

   let today = new Date();
   let currentDay = today.getDay();
   let day = "";

      // response from our server to the browser
      switch (currentDay) {
         case 0:
            day = "Sunday";
            break;
         case 1:
            day = "Monday";
            break;
         case 2:
            day = "Tuesday";
            break;
         case 3:
            day = "Wednesday";
            break;
         case 4:
            day = "Thursday";
            break;
         case 5:
            day = "Friday";
            break;
         case 6:
            day = "Saturday";
            break;
         default:

         //throws an error
         console.log("Error: current day is equal to:" + currentDay);

      }// Switch Statement

      res.render('list', {DAY : day});
}); // app.get Route

app.listen(4000, () => console.log('Example app listening on port 4000!'));