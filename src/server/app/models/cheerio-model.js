var request = require('request');
var cheerio = require('cheerio');
var Promise = require('promise');

// source : https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
function scrape(url, json) {
  'use strict';
  json = json || false;
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var parsedResults = [];
        $('span.comhead').each(function (i, element) {
          // Select the previous element
          var a = $(this).prev();
          // Get the rank by parsing the element two levels above the "a" element
          var rank = a.parent().parent().text();
          // Parse the link title
          var title = a.text();
          // Parse the href attribute from the "a" element
          var link = a.attr('href');
          // Our parsed meta data object
          var metadata = {
            rank: parseInt(rank),
            title: title,
            link: link
          };
          // Push meta-data into parsedResults array
          parsedResults.push(metadata);
        });
      }
      resolve(parsedResults);
    });
  });
}

exports.scrape = scrape;
