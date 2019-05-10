var destination = process.env.GULP_DESTINATION || 'static';

// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  streamqueue = require('streamqueue');

  sass.compiler = require('node-sass');


// Styles
gulp.task('styles', function () {
  return gulp.src('themes/smi/static/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('themes/smi/static/css/'))
    .pipe(gulp.dest(destination + '/css'));
});


// Images
gulp.task('images', function () {
  return streamqueue({objectMode: true},
    gulp.src('themes/smi/static/img/**/*{.jpg, .png, .gif}')
      .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))),
    gulp.src('themes/smi/static/img/**/*')
      .pipe(gulp.dest(destination + '/img'))
  )
});


// Clean
gulp.task('clean', function () {
  return del([
    'public',
    'content/docs/'
  ], {force: true});
});


// Copy
gulp.task('copy', function () {
  return gulp.src('themes/smi/static/fonts/*')
    .pipe(gulp.dest(destination + '/fonts'));
});
gulp.task('copyall', function () {
  return gulp.src('static/**/*')
    .pipe(gulp.dest('public/'));
});


// 'gulp' default task to build the site assets
gulp.task('default', gulp.series('styles', 'images', 'copy'), function() { });

// 'gulp watch' to watch for changes during dev
gulp.task('watch', function () {

  gulp.watch('themes/smi/static/sass/**/*.scss', gulp.series('styles'));

  livereload.listen();

  gulp.watch([destination + '/**', destination + '/**']).on('change', livereload.changed);
});