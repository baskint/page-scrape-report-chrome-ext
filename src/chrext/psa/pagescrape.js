// PSA content page
var psaScrape = (function () {
  'use strict';
  // TODO implement content script functionality

  var start = function () {

    init();

    $('#btnScrape').click(function () {
      var scrapeUrl = encodeURI($('#targeturl').val());
      var scrapeType = $('input[name="SCRAPETYPE"]:checked').val();
      $('#results-panel').hide();
      $.ajax({
        type: "POST",
        url: "http://localhost:3003/api/scrape",
        data: {
          url: scrapeUrl,
          scrapeWith: scrapeType
        },
        success: function (res) {
          displayResults(res);
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

  function displayResults(res) {
    $('#results-panel').show();
    // console.log(res);
    var combines = res.combines;
//    $.each(combines, function () {
         //      console.log(this.rank);
         //      console.log(this.title);
         //      console.log(encodeURI(this.link));
         //    });
    $('#results-summary').text(combines.length + ' link records are saved');
  }

  var listener = function (request, sender, sendResponse) {
    // TODO listen to background page generated events
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
