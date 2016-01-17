'use strict';

import Nightmare from "nightmare";

new Nightmare()
  .goto('http://weather.com')
  .evaluate(function () {
    return document.querySelector('.temperature').innerText;
  }, function (temperature) {
    console.log(temperature);
  })
  .run();
