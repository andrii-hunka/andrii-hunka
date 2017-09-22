const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./tasks');
gulp.task('copy', function() {
        gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
    });
// gulp.task('default', ['sass','typescript','tslint','copy'], function () {
//     // gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/scss/*.scss', ['sass']);
//     gulp.watch('src/js/*.ts',['tslint','typescript'])
// });
gulp.task('build', ['sass-lint','sass','tslint','typescript','copy'], function () {
});
