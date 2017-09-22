const gulp = require('gulp');
const ts = require('gulp-typescript');
 
gulp.task('typescript', function () {
    return gulp.src('src/js/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'app.js'
        }))
        .pipe(gulp.dest('build'));
});