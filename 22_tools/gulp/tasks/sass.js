const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'));
});