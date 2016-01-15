var psaEvent = (function () {
  'use strict';


  var start = function(tab) {
        // create a separate window
    chrome.windows.create({
      url: chrome.extension.getURL("psa/pagescrape.html"),
      focused: true,
      type: "popup",
      height: 500,
      width: 300
    }, function (win) {
      // set the window Id in the local storage -
      // if the form does not load, simply clear this key/value pair from the localstorage using DevTools
      var manifestData = chrome.runtime.getManifest();
      var appversion = "0.0.0";
      if (manifestData) {
        appversion = manifestData.version;
      }
    });
  };

  return {
    start: start
  };


})();

chrome.browserAction.onClicked.addListener(psaEvent.start);
