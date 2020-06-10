// jshint esversion:6

// My modules:
const express = require('express');
const bodyParser = require("body-parser");

// My App:
  const app = express(); // initiates express

   let items = ['WakeUp & Pray', 'Code', 'Pray'];
   let workItems =[];

   // a special express function called static(); to use local files and assets in our "public" folder
   app.use(express.static("public"));  // this allows Our "Server" to use our local static files; css, img, etc. thats on our system
   
   // a special bodyparser function calld urlencoded(); to fetch the data from our form in conjunction with the post route
   app.use(bodyParser.urlencoded({extended: true})); // this allows us to fetch the data from our form html page

     
   app.set('view engine', 'ejs'); // initiates ejs view engine

   // get route to the home route
   app.get('/', (req, res) => {

    // logic:
      let options = {
            weekday : 'long',
            day     : 'numeric', 
            month   : 'long'
      };

      let today = new Date();
      let day = today.toLocaleDateString("en-US", options);

      res.render('list', {listTitle : day, newListItems : items});

  }); // app.get Route

   app.post('/', (req, res) => {
      
      console.log(req.body);
      let item = req.body.newItem;

      if(req.body.button === 'Work') {
         workItems.push(item);
         res.redirect("/work");
         
      }else{        
         items.push(item);
         res.redirect("/");
      }

      

   }); // app.post method


   app.get('/work', (req, res) =>{ 
      res.render('list', {listTitle : 'Work List', newListItems : workItems});
   });


   app.get('/about', (req, res) => { 
      res.render('about');
   });

   // res.send(); // this last piece is need to send our whole .get response to the browser


   // port heroku or local on 4000
   app.listen(process.env.PORT || 4000, function(){ // A DYNAMIC PORT that Heroku will define on the go
      console.log('This Server is Running on Port 4000 For the ToDo App!');

   });// app.listen

   // SideNote:
   // res.send; can only be used once in every .get() method
   // res.write; can be used to send multiple pieces of data to the browser
   // res.sendFile(); this sends a html static page to the browser
