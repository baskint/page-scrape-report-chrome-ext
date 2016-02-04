'use strict';
var expect = chai.expect;

describe('Page Scrape Analysis Content page ', function () {

  beforeEach(function () {
    // before hook
  });

  it('should receive and place the results in a table', function () {
    var foo = 'bar';
    var beverages = {
      tea: ['chai', 'matcha', 'oolong']
    };

    var scrapes = [{
      "title": "DevFest2016"
    }, {
      "title": "some othe title"
    }];
    var sender = new Object();
    var sendResponse = new Object();
    psaScrape.listener(scrapes, sender, sendResponse);
    var tcontents = document.getElementById('searchResults').innerHTML;

    expect(tcontents, "should contain DevFest2016 in title").to.contain("DevFest2016");

  });

  afterEach(function () {
    // after hook
  });
});
