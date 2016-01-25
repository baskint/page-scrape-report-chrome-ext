// app/models/scrape.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScrapeSchema = new Schema({
  url: String,
  created_with: String,
  combines: [],
  scraped_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Scrape', ScrapeSchema);
