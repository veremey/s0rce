var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
var plumber  = require('gulp-plumber');
var config = require('../config');

gulp.task('img', function() {
  return gulp.src([
            config.src.img + '**/*.{jpg,png,svg,gif}',
            '!' + config.src.img + 'icons/**/*'
        ])
    .pipe(plumber({
            errorHandler: config.errorHandler
        }))
    .pipe(changed(config.dest.img))
    .pipe(imagemin({
            progressive: true,
            // optimizationLevel: 7,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(config.dest.img));
});


gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('img:watch', function() {
    gulp.watch([
        config.src.img + '**/*',
        '!' + config.src.img + 'icons/**/*'
    ], ['img']);
});