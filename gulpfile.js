var gulp = require('gulp');

var connect      = require('gulp-connect');
var less         = require('gulp-less');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var minifyCss    = require('gulp-minify-css');
var gulp         = require('gulp');
var less         = require('gulp-less');

gulp.task('less', function () {
  gulp.src(['less/index.less'])
    .pipe(less())
    .pipe(postcss([autoprefixer({browsers: ['last 2 version']})]))
    .pipe(gulp.dest('css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('css'))
    ;
});

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['less']);
});

gulp.task('connect', function() {
  connect.server({
    port: 4000
  });
});

gulp.task('default', ['less', 'connect', 'watch']);
