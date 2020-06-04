// jshint esversion:6

// My modules:
let express = require('express');
let bodyParser = require("body-parser");

// My App:
  let app = express(); // initiates express

   app.set('view engine', 'ejs'); // initiates ejs view engine

   // get route to the home route
   app.get('/', (req, res) => {

    // logic:
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


   // res.send(); // this last piece is need to send our whole .get response to the browser



   // port heroku or local on 4000
   app.listen(process.env.PORT || 4000, function(){ // A DYNAMIC PORT that Heroku will define on the go
      console.log('This Server is Running on Port 4000 For the ToDo App!');

   });// app.listen

   // SideNote:
   // res.send; can only be used once in every .get() method
   // res.write; can be used to send multiple pieces of data to the browser
   // res.sendFile(); this sends a html static page to the browser
