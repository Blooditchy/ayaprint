'use strict';
module.exports = function () {
    $.gulp.task('imagemin', function () {  
        $.gulp.src('src/static/img/**/*')
            .pipe($.gp.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true
            }))
            .pipe($.gulp.dest('build/static/img/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};