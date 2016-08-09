/**
 * 由  冯博 创建于 2016/8/9.
 * @file layer
 * @description 地图图层layer类
 */
(function () {
    "use strict";
    var Url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
    var defaultSetting = {
        url: Url,
        options: {
            zoom: 8,
            minZoom: 7,
            maxZoom: 13
        }
    }
    L.TileLayer.prototype.options=Object.assign({},L.TileLayer.prototype.options, defaultSetting.options);
    /**
     * 切片图层类
     * @param url 图层地址 String 必填
     * @param options 图层配置项，Object 可选
     * @returns {*} 返回leaflet的TileLayer
     */
    sefon.tileLayer = function (url, options) {
        var url = url || defaultSetting.url;
        return new L.TileLayer(url, options);
    }
})();