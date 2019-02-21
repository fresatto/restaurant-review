var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');

gulp.task('sass', function () {
     return gulp.src('./sass/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./css'));
});


// Watch sass
// ws -p 8000 no terminal pros restaurants carregarem
gulp.task('serve', function() {
     browserSync.init({
          proxy: 'http://127.0.0.1:8000'
     });

     gulp.watch('./sass/*.scss', gulp.series('sass')).on('change', browserSync.reload);
     gulp.watch('./*.html').on('change', browserSync.reload);
     gulp.watch('./js/*.js').on('change', browserSync.reload);
});