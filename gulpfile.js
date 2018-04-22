var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {  
    gulp.src('assets/scss/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('cssConcat', function () {
  return gulp.src('assets/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'browser-sync', 'cssConcat'], function () {  
    
    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("assets/css/*.css", ['cssConcat']);
     gulp.watch("*.html").on('change', browserSync.reload);
     // gulp.watch("assets/css/bundle.css").on('change', browserSync.reload);
});