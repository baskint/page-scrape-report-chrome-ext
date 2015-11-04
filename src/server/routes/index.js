'use strict';
var express = require('express');
var router = express.Router();

var User = require('.././models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/* GET Hello World page. */
router.get('/helloworld', function (req, res) {
    res.render('helloworld', {
        title: 'Hello, World!'
    });
});

/* GET Userlist page. */
router.get('/userlist', function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        res.render('userlist', {
            "userlist": users
        });
        // res.json(users);
    });
});

module.exports = router;
