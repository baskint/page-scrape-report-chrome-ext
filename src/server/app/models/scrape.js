// app/models/bear.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScrapeSchema = new Schema({
  url: String,
  links: [{
    type: String
  }]
});

module.exports = mongoose.model('Scrape', ScrapeSchema);