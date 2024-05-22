const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");

gulp.task("pug", () => {
  return gulp
    .src("app/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"));
});

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
      .pipe(ghPages());
});


gulp.task("scss", function () {
  return gulp
    .src("app/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/styles/"));
});
gulp.task("copy-img", function () {
  return gulp.src("./app/assets/**/*.*").pipe(gulp.dest("./dist/assets"));
});
gulp.task("copy-js", function () {
  return gulp.src("./app/scripts/**/*.js").pipe(gulp.dest("./dist/scripts"));
});

gulp.task("watch", function () {
  gulp.watch("app/**/*.pug", gulp.series("pug"));
  gulp.watch("app/styles/**/*.scss", gulp.series("scss"));
  //gulp.watch("app/assets/**/*.*)", gulp.series("copy-img"));
  /// gulp.watch("app/scripts/**/*.js)", gulp.series("copy-js"));
});

gulp.task("default", gulp.series("pug", "scss", "watch"));
