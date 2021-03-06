var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('watch', ['sass'], function(){

  browserSync.init({
    server: '.'
  });

gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('./js/**/*.js', browserSync.reload);

});


//Compile Sass into CSS & inject into browsers

gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

//default will also watch
gulp.task('default', ['watch']);
