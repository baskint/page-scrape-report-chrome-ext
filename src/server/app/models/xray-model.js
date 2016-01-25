'using strict';
var XRay = require('x-ray');
var xray = new XRay();

exports.scrape = function (url) {
  return xray(url, '.athing', [{
      rank: '.rank',
      title: 'td:nth-child(3) a',
      link: 'td:nth-child(3) a@href'
    }])
    // use the below two lines for pagination and limiting the number of pages visited
    //.paginate('a[rel="nofollow"]:last-child@href')
    // .limit(3)
    .write(); // this allows a stream being returning
};
