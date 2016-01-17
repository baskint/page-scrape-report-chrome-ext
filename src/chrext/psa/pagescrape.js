// PSA content page
var psaScrape = (function () {
  'use strict';
  // TODO implement content script functionality

  var start = function () {

    init();

    $('#btnScrape').click(function () {
      var scrapeUrl = encodeURI($('#targeturl').val());
      console.log(scrapeUrl);
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

  function init() {
    chrome.runtime.sendMessage('psa-init', function (response) {
      if (response.targetUrl) {
        $('#targeturl').val(response.targetUrl);
      }
      if (response.appversion) {
        $('#appversion').text('version: ' + response.appversion);
      }
    });

  }

  var listener = function (request, sender, sendResponse) {

  };

  return {
    start: start,
    listener: listener
  };
})();

document.addEventListener("DOMContentLoaded", function (event) {
  'use strict';
  // boostrap the application
  psaScrape.start();
  // set up a listener
  chrome.runtime.onMessage.addListener(psaScrape.listener);
});
