var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  gulp.src('src/assets/css/main.scss')
    .pipe(plumber())
    .pipe(sass( /*{outputStyle: 'compressed'}*/ ))
    .pipe(autoprefixer('last 10 versions'))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('docs/assets/css'));
})

gulp.task('minify', function() {
  return gulp.src('src/views/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('docs'));
})

gulp.task('images', function() {
  return gulp.src('src/assets/img/*.*')
    .pipe(gulp.dest('docs/assets/img'));
})

gulp.task('build', function() {
  gulp
    .src([
      'src/assets/js/galeryApp.js',
      'src/assets/js/indexCtrl.js',
      'src/assets/js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('docs/assets/js'));

  gulp.src('src/assets/js/imageService.js')
    .pipe(gulp.dest('docs/assets/js'));
});

gulp.task('watch', function() {
  gulp.watch(['src/views/*.html'], ['minify']);
  gulp.watch(['src/assets/css/*.scss'], ['css']);
  gulp.watch(['src/assets/js/*.js'], ['build']);
  gulp.watch(['src/assets/img/*.*'], ['images']);
  // return compile(true); 
});

gulp.task('extras', function() {
  //libraries
  gulp.src('src/assets/libs/angulargrid.js')
    .pipe(gulp.dest('docs/assets/libs'));

  gulp.src('src/assets/libs/angular-animate.js')
    .pipe(gulp.dest('docs/assets/libs'));

  gulp.src('src/assets/libs/angular-sanitize.min.js')
    .pipe(gulp.dest('docs/assets/libs'));

  return gulp.src('node_modules/angular/angular.min.js')
    .pipe(gulp.dest('docs/assets/libs'));
})

gulp.task('default', ['extras', 'images', 'css', 'minify', 'build', 'watch']);