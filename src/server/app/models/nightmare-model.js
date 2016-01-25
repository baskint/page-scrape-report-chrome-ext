'use strict';
var Nightmare = require('nightmare');
var nightmare = new Nightmare();
//import Nightmare from "nightmare";

nightmare
  .goto('http://weather.com')
  .evaluate(function () {
    return document.querySelector('.temperature').innerText;
  }, function (temperature) {
    // return this
    console.log(temperature);
  })
  .run();
