/**
 * 由  冯博 创建于 2016/8/11.
 * @file Control
 * @description 地图控件控制器类
 */
;(function () {
    sefon.Control = L.Class.extend({
        options: {},
        initialize: function (map, controls) {
            map.addControl(
                L.control.zoom(
                    {
                        position: "topleft",
                        zoomInTitle: sefon.lang.zoomInTitle,
                        zoomOutTitle: sefon.lang.zoomOutTitle
                    }
                )
            );
            if (controls && controls.length > 0) {
                controls.map(function (control) {
                    map.addControl(L.control[control]())
                });
            }
        }
    });
    sefon.control = function (map, controls) {
        return new sefon.Control(map, controls);
    }
})();