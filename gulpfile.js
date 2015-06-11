'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

var jsSrc = './js/**/*.js';

gulp.task('js', function () {
  gulp.src(jsSrc)
      .pipe(uglify())
      .pipe(gulp.dest('./'));
});

gulp.task('js:watch', function () {
  gulp.watch(jsSrc, ['js']);
});

gulp.task('default', ['js', 'js:watch']);
