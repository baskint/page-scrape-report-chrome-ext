var psaScrape = (function () {
  'use strict';
  // TODO implement content script functionality

  var start = function () {
    $('#btnScrape').click(function () {
      var scrapeUrl = encodeURI('https://news.ycombinator.com/');

      $.ajax({
        type: "POST",
        url: "http://localhost:3003/api/scrape",
        data: {
          url: scrapeUrl
        },
        success: function (res) {
          console.log(res);
        },
        error: function (err) {
          console.log(err);
        },
        dataType: "json"
      });


    });
  };

  return {
    start: start
  };
})();

document.addEventListener("DOMContentLoaded", function (event) {
  'use strict';
  psaScrape.start();
});
