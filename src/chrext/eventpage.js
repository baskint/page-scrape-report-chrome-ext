// Event page for handling page scrape and analysis
var psaEvent = (function () {
  'use strict';
  var targeturl = null;
  var appversion = "0.0.0";

  function getScraped() {
    var p = new Promise(function (resolve, reject) {
      chrome.storage.local.get('psaArray', function (readObj) {
        if (!readObj.psaArray) { // == co null, undefined, NaN, 0, "", false
          // nothing can be done - some one else erased it!
          reject(false);
        } else {
          resolve(readObj.psaArray[0]);
        }
      });
    });
    return p;
  }

  var start = function (tab) {
    // create a separate window
    chrome.windows.create({
      url: chrome.extension.getURL("psa/pagescrape.html"),
      focused: true,
      type: "panel",
      height: 500,
      width: 300
    }, function () {
      var manifestData = chrome.runtime.getManifest();

      if (manifestData) {
        appversion = manifestData.version;
      }
      targeturl = tab.url;
    });
  };

  var listener = function (request, sender, sendResponse) {
    // TODO refractor this to its own function
    if (request === 'psa-init') {
      sendResponse({
        'targetUrl': targeturl,
        'appversion': appversion
      });
    } else if (request.searchTerm) {
      // TODO load all stored titles from the local storage
      var searchString = request.searchTerm.toUpperCase();
      getScraped().then(function (scraped) {
        if (scraped) {
          // console.log(scraped);
          var tobeSearched = null;
          var searchResults = [];
          scraped.combines.forEach(function (v, i, a) {
            tobeSearched = v.title.toUpperCase();
            //            console.log(tobeSearched);
            //            console.log(searchString);
            if (tobeSearched.indexOf(searchString, 0) > -1) {
              // TODO return results and render
              var result = {
                "title": v.title,
                "rank": v.rank,
                "link": v.link
              };
              searchResults.push(result);
            }

          });
          // TODO generate an event to get the results back to the popup form
          console.dir(searchResults);
        }
      });
    }
  };

  return {
    start: start,
    listener: listener
  };

})();

chrome.browserAction.onClicked.addListener(psaEvent.start);

chrome.runtime.onMessage.addListener(psaEvent.listener);
