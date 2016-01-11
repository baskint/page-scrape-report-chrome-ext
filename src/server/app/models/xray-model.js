var XRay = require('x-ray');
var xray = new XRay();

// xray('https://news.ycombinator.com/', '.athing', [{
//     rank: '.rank',
//     title: 'td:nth-child(3) a',
//     link: 'td:nth-child(3) a@href'
//   }])
//   .paginate('a[rel="nofollow"]:last-child@href')
//   .limit(3)
//   .write('./results.json');

exports.scrape = function(url) {

  return xray(url, '.athing', [{
      rank: '.rank',
      title: 'td:nth-child(3) a',
      link: 'td:nth-child(3) a@href'
    }])
    .paginate('a[rel="nofollow"]:last-child@href')
    .limit(3)
    .write();
};
