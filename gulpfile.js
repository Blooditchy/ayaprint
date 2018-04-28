'use strict';

// var gulp = require('gulp');
// var gp   = require('gulp-load-plugins')();
// var bs   = require('browser-sync').create();

//глобальный объект=======================================
global.$ = {
    path: {
        tasks: require('./gulp/config/tasks.js')
    },
    gulp: require('gulp'),
    gp:   require('gulp-load-plugins')(),
    bs:   require('browser-sync').create()
};

//пробегаем по массиву tasks.js===========================
$.path.tasks.forEach(function (taskPath) { 
    require(taskPath)();
});

//default запуск по gulp==================================
$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('pug','sass'),
    $.gulp.parallel('imagemin','fonts','watch','serve')
));