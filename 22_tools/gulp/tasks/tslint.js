const gulp = require('gulp');
const tslint = require('gulp-tslint');
 
gulp.task('tslint', function () {
    return gulp.src("src/js/app.ts")
        .pipe(tslint({
            "compilerOptions": {
                "target": "es5",
                "module": "system",
                "moduleResolution": "node",
                "experimentalDecorators": true,
                "removeComments": false
            },
            "exclude": [
            "node_modules"
            ]
        }))
        .pipe(tslint.report())
});