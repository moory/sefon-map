/**
 * 由  冯博 创建于 2016/8/9.
 * @file map
 * @description 地图基础类
 */
;(function () {
    "use strict";
    var defaultSetting = {
        id: 'map-container',
        options: {
            zoomControl:false,
            attributionControl:false
        }
    }
    /**
     * 地图基础类
     * @param id 地图寄主dom元素id
     * @param options 地图配置可选项
     * @returns {L.map} 返回leaflet map对象
     */
    sefon.map = function (id, options) {
        var id = id || defaultSetting.id;
        var options = options || defaultSetting.options;
        return new L.map(id, options);
    }
})();

