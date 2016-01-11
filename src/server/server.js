// server.js

// BASE SETUP
// =============================================================================

// source:
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var Firebase = require('firebase');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/page-scrape-chrex'); // connect to our database

var Scrape = require('./app/models/scrape');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 3003; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router


// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:3003/api)
router.get('/', function (req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});


// ----------------------------------------------------
router.route('/scrape')

// create a bear (accessed at POST http://localhost:8080/api/bears)
.post(function (req, res) {

  var links = {
    link1: encodeURI("http://baskintapkan.com:3004"),
    link2: encodeURI("http://google.com")
  };
  var scrape = new Scrape(); // create a new instance of the Scrape model

  scrape.url = req.body.url; // set the links
  scrape.links = links;
  console.log(req.body.url);
  // Firebase update happens here
  var pageScrapeFirebase = new Firebase("https://page-scrape-chrext.firebaseio.com/");
  pageScrapeFirebase.set({
    url: scrape.url,
    links: links
  });

  // save the bear and check for errors
  scrape.save(function (err) {
    if (err)
      res.send(err);

    res.json({
      links: links
    });
  });


});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
