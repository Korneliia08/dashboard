const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src('app/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
    return gulp.src('app/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles/'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.pug', gulp.series('pug'));
    gulp.watch('app/style/**/*.scss', gulp.series('scss'));
});

gulp.task('default', gulp.series('pug', 'scss', 'watch'));
