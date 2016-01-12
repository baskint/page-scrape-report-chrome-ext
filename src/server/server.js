// server.js
'use strict';
// BASE SETUP
// =============================================================================

// starting source link:
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var Firebase = require('firebase');

// X-Ray parser model to do back-end parsing
var xrm = require('./app/models/xray-model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/page-scrape-chrex'); // connect to Mongo database

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

// create a scrape data (accessed at POST http://localhost:8080/api/scape)
.post(function (req, res) {
  var scrape = new Scrape(); // create a new instance of the Scrape model
  scrape.url = req.body.url; // set the URL

  // returns a readable stream as defined in the X-ray package - handle accordingly
  var readableStream = xrm.scrape(scrape.url);
  var data = '';
  readableStream.on('readable', function () {
    var chunk = '';
    while ((chunk = readableStream.read()) != null) {
      data += chunk;
    }
  });

  readableStream.on('end', function () {
    persistData(data, scrape, res);
  });

});

function persistData(data, scrape, res) {
  scrape.combines = JSON.parse(data);
  // save the combines and check for errors
  scrape.save(function (err) {
    if (err)
      res.send(err);
    res.json({
      combines: data
    });
  });

  // used the combineSet to update the Firebase instance
  var combineSet = [];
  for (var i = 0, len = scrape.combines.length; i < len; i++) {
    var linkSet = {}
    linkSet.rank = scrape.combines[i].rank;
    linkSet.title = scrape.combines[i].title;
    linkSet.link = scrape.combines[i].link
    combineSet.push(linkSet);
  }

  var pageScrapeFirebase = new Firebase(
    "https://page-scrape-chrext.firebaseio.com/");
  var fb_scraped = pageScrapeFirebase.child("scrapes");
  fb_scraped.set({
    url: scrape.url,
    combines: combineSet
  });
}


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
