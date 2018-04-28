'use strict';
module.exports = function () {
    $.gulp.task('sass', function () {  
        return $.gulp.src('src/static/scss/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on("error", $.gp.notify.onError({
                message: "Errror: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 10 versions',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'Opera 12.1'
            ]
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};