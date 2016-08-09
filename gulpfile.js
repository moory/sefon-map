/**
 * 由  冯博 创建于 2016/8/9.
 * @file gulpfile.js
 * @description
 */

"use strict"

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

//默认任务
gulp.task('default', ['clean', 'concat', 'watch']);
//浏览器同步
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//删除打包文件夹
gulp.task('clean', function () {
    del(['./dist']);
});

gulp.task('concat', function () {
    gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init()) //添加sourcemap
            .pipe(concat('sefon.map.js'))
        .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist')) //未压缩版本
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(rename({extname:'.min.js'})) //压缩版本
        .pipe(sourcemaps.write())
             .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['clean', 'concat'])
});