/**
 * 由  冯博 创建于 2016/8/9.
 * @file gulpfile.js
 * @description
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync').create();

//默认任务
gulp.task('default', ['clean','concat','watch']);
//浏览器同步
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//删除打包文件夹
gulp.task('clean', function () {
    del(['./dist']);
})

gulp.task('concat',function(){
    gulp.src('./src/**/*.js')
        .pipe(concat('sefon.map.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch',function(){
    gulp.watch( './src/**/*.js',['clean','concat'])
});