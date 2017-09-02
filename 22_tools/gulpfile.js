var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function() {
  
});
gulp.task('css', function(){
  return gulp.src('src/css/global.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
});