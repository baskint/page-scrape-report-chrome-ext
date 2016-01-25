var request = require('request');
var cheerio = require('cheerio');
var Q = require('Q');

// source : https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
exports.scrape = function (url) {
    request(url, function (error, response, html) {
      var deferred = Q.defer();
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
          // Get the subtext children from the next row in the HTML table.
          var subtext = a.parent().parent().next().children('.subtext').children();
          // Extract the relevant data from the children
          var points = $(subtext).eq(0).text();
          var username = $(subtext).eq(1).text();
          var comments = $(subtext).eq(2).text();
          // Our parsed meta data object
          var metadata = {
            rank: parseInt(rank),
            title: title,
            link: link,
            //points: parseInt(points),
            //username: username,
            //comments: parseInt(comments)
          };
          // Push meta-data into parsedResults array
          parsedResults.push(metadata);
        });
        // Log our finished parse results in the terminal
        //console.log(parsedResults);
        console.log(parsedResults);
        deferred.resolve(parsedResults);
      }
      return deferred.promise;
    });

}
