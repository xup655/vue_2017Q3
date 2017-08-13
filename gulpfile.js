var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('sass', function() {

  return gulp.src('assets/sass/*.scss')
          .pipe(scss())
          .pipe(gulp.dest('assets/css'))

});

gulp.task('default', ['sass'], function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
})