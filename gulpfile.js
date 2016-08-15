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
gulp.task('default', ['clean', 'concat', 'watch', 'browser-sync']);
//浏览器同步
gulp.task('browser-sync', function () {
    browserSync.init({
        files: [
            "./src/**/*.js",
            "./demo/*.html",
            "./demo/*.js"
        ],
        logLevel: "debug",
        logPrefix: "insgeek",
        //server: {
        //    /*这里写的是html文件相对于根目录所在的文件夹*/
        //    baseDir: "./demo",
        //    /*这里如果不写，默认启动的是index.html，如果是其他名字，需要这里写*/
        //     index: "base-map.html"
        //},
        /*这里的proxy写的是需要代理的服务器，我自己的wamp启动的是localhost:80*/
        proxy:"http://localhost:3000",
        /*这里写的是代理后，bs在哪个端口打开*/
        //port: 81,
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        browser: "chrome"
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
        .pipe(rename({extname: '.min.js'})) //压缩版本
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['clean', 'concat'])
});

