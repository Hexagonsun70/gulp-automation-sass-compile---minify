//new syntax compared to YT tutorial
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

// Compile Sass using gulp-sass
gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Compile Minify CSS using uglify
gulp.task('css', function(){
  return gulp.src('./css/*.css')
    .pipe(uglifycss({
      'maxLineLen' : 400,
      'uglyComments' : true
    }))
    .pipe(gulp.dest('./dist/'));
});

// Run Sass and CSS functions
gulp.task('run', gulp.series('sass', 'css'));

// Watch for changes in Sass, which then automatically converts to css
gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', gulp.series('sass'));
  gulp.watch('./css/*.css', gulp.series('css'));
});

// Default task ran when 'gulp' is called
gulp.task('default', gulp.series('run', 'watch'));
