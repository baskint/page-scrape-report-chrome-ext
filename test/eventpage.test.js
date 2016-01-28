/*
 * Event Page tests
 */

describe('event page', function () {

  // sometimes it takes time to start phantomjs
  this.timeout(4000);

  // empty html page aka generated event page
  var FILENAME = 'test/empty.html';

  it('should set and get a window Id from local storage', function (done) {
    page.open(FILENAME, function () {
      // stub `chrome.tabs.query` with fake data
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      // run eventpage js
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        //sinon.assert.calledOnce(chrome.runtime.OnMessage.addListener);
        var windowId = 42;
        // set the window id
        psaEvent.setCompatWinId(42);
        // get the window id
        assert.equal(psaEvent.getCompatWinId(), windowId);
      });
      done();
    });
  });

  it('should reset windowId from local storage', function (done) {
    page.open(FILENAME, function () {
      // stub `chrome.tabs.query` with fake data
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      // run eventpage js
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        //sinon.assert.calledOnce(chrome.runtime.OnMessage.addListener);
        var windowId = 42;
        psaEvent.setCompatWinId(windowId)
          // set the window id
        psaEvent.resetCompatWinId(windowId);
        // get the window id
        assert.equal(0, psaEvent.getCompatWinId());

      });
      done();
    });
  });

  xit('should determine whether it has been previously run', function (done) {
    page.open(FILENAME, function () {
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {

        var previouslyRun = hasPreviouslyRun();

        assert.equal(true, previouslyRun);
        //sinon.assert.calledOnce(spy);
      });
      done();
    });

  });

  xit('should create new popup form', function (done) {

    page.open(FILENAME, function () {
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        var tab = {
          url: 'http://google.com',
          id: 5
        };
        createNewPopupWindow(tab);
      });
      done();
    });
  });

  xit('should initialize the capture compatibility form', function (done) {

    page.open(FILENAME, function () {
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        var tab = {
          url: 'http://google.com',
          id: 5
        };
        var appversion = '1.0.0';
        initCapComForm(tab, appversion);
      });
      done();
    });
  });

  it('should attach static analysis scripts', function (done) {

    page.open(FILENAME, function () {
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        var request = {
          inject_mms: true
        };
        psaEvent.attachStaticAnalysis(request);
      });
      done();
    });
  });

  xit('should attach dynamic events tracking scripts', function (done) {
    page.open(FILENAME, function () {
      page.evaluate(function (tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/compat.tabs.query.json'));
      page.injectJs('src/eventpage.js');
      // assert
      page.evaluate(function () {
        compatTabId = 1000;
        var request = {
          eventType: 'trackVisit'
        };
        attachDynamicEvents(JSON.stringify(request));
      });
      done();
    });
  });

});
