/**
 * 由  冯博 创建于 2016/8/9.
 * @file sefon
 * @description 全局变量
 */

var sefon = {
    version: '0.01'
}
function expose() {
    var oldSefon = window.sefon;

    sefon.noConflict = function () {
        window.sefon = oldSefon;
        return this;
    };
    window.sefon = sefon;
}

// 定义 sefon 为 Node平台 loaders, 包含 Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = sefon;

// 定义 sefon 为AMD 模块
} else if (typeof define === 'function' && define.amd) {
    define(sefon);
}

// 将sefon定义为全局变量
if (typeof window !== 'undefined') {
    expose();
}
