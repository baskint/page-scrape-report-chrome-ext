var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// mongoimport --db pagescraper --collection users --type json --file /Users/baskint/src/page-scrape-report-chrome-ext/src/server/data/seed.json --jsonArray
// db.users.remove({})


module.exports = router;
