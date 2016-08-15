/**
 * 由  冯博 创建于 2016/8/10.
 * @file Marker
 * @description 地图标记类
 */

;(function () {
    "use strict";
    var defaultSetting = {
        latlng: null,
        options: {}
    }
    sefon.Marker = function (latlng, options) {
        return new L.Marker(latlng, options);
    }
})();

