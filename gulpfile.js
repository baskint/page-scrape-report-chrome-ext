'use strict';

var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('contentpage', function () {
  return gulp
    .src('test/psa/pagescrape.test.html')
    .pipe(mochaPhantomJS({
      reporter: 'spec'
    }));
});

gulp.task('eventpage', function () {
  return gulp
    .src('test/eventpage.test.html')
    .pipe(mochaPhantomJS({
      reporter: 'spec'
    }));
});

gulp.task('test', ['eventpage', 'contentpage'], function () {
  return gulp;
})
