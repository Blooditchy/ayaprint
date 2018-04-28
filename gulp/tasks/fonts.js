'use strict';
module.exports = function () {
    $.gulp.task('fonts', function () {
        $.gulp.src('src/static/font/*')
            .pipe($.gulp.dest('build/static/fonts/'))
    });
};