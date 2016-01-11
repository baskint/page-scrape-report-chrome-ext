var psaScrape = (function () {
  'use strict';
  // TODO implement content script functionality

  var start = function () {
    $('#btnScrape').click(function () {
      var url = encodeURI('https://news.ycombinator.com/');
      $.ajax({
        type: "POST",
        url: "http://localhost:3003/api/scrape",
        data: url,
        contenType: "application/json",
        success: function (data) {
          console.log(data);
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
