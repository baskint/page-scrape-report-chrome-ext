// PSA content page
var psaScrape = (function () {
  'use strict';

  function searchInTitles(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    var searchString = RegExp.escape($('#srch-term').val());
    console.log(searchString);
    var searchTerm = {
      'searchTerm': searchString
    };
    chrome.runtime.sendMessage(null, searchTerm);
    return false;
  }

  function init() {
    chrome.runtime.sendMessage('psa-init', function (response) {
      if (response.targetUrl) {
        $('#targeturl').val(response.targetUrl);
      }
      if (response.appversion) {
        $('#appversion').text('version: ' + response.appversion);
      }
    });
    $('#searchForm').hide();
  }

  RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  function saveScrapes(combines) {

    var p = new Promise(function (resolve, reject) {
      var scrapeUrl = $('#targeturl').val();

      chrome.storage.local.get('psaArray', function (readObj) {
        if (!readObj.psaArray) { // == co null, undefined, NaN, 0, "", false
          readObj.psaArray = [{
            "scrapeUrl": scrapeUrl,
            "combines": combines
          }];
        } else {
          for (var i = 0; i < readObj.psaArray.length; i++) {
            var v = readObj.psaArray[i];
            if (v.scrapeUrl === scrapeUrl) {
              v.scrapeUrl = scrapeUrl;
              v.combines = combines;
            }
            // reset it back
            readObj.psaArray[i] = v;
          }
        }
        chrome.storage.local.set({
          "psaArray": readObj.psaArray
        }, function () {
          resolve(true);
        });
      });
    });
    return p;
  }

  function displayResults(res) {
    $('#results-panel').show();
    // console.log(res);
    var combines = res.combines;

    saveScrapes(combines).then(function (url) {
      console.log(url);
      $('#results-summary').text('Filed ' + combines.length + ' link records');
      $('#searchForm').show();
    });

  }

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

    var searchForm = document.getElementById('searchForm');
    if (searchForm.addEventListener) {
      searchForm.addEventListener("submit", searchInTitles, false);
    }
  };

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
