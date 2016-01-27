// Event page for handling page scrape and analysis
var psaEvent = (function () {
  'use strict';
  var targeturl = null;
  var appversion = "0.0.0";

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
    if (request === 'psa-init') {
      sendResponse({
        'targetUrl': targeturl,
        'appversion': appversion
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
