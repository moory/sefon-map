/**
 * Created by phobo on 8/9 0009.
 *   @file TileLayer.WMS
 * @description WMS标准图层类
 */
;(function () {
    "use strict";
    var defaultSetting = {
        url: null,
        options: {}
    }
    /**
     * 符合WMS标准图层
     * @param url 图层地址 String
     * @param options   图层配置项 Object
     * @returns {*}
     */
    sefon.tileLayer.wms = function (url, options) {
        var url = url || defaultSetting.url;
        var options = options || defaultSetting.options;
        return new L.TileLayer.WMS(url, options);
    };
})();