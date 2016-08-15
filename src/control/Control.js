/**
 * 由  冯博 创建于 2016/8/11.
 * @file Control
 * @description 地图控件控制器类
 */
;(function () {
    sefon.Control = L.Class.extend({
        options: {},
        initialize: function (map, controls) {
            var me = this;
            L.drawLocal =sefon.lang ? sefon.lang.toolbar: L.drawLocal;
            map.addControl(
                L.control.zoom(
                    {
                        position: "topleft",
                        zoomInTitle: sefon.lang ? sefon.lang.zoomInTitle:"zoom in",
                        zoomOutTitle: sefon.lang ? sefon.lang.zoomOutTitle:'zoom out'
                    }
                )
            );
            if (controls && controls.length > 0) {
                controls.map(function (control) {
                    if (control === 'Draw') {
                        me.addDrawTools(map);
                    } else {
                        map.addControl(L.control[control]())
                    }
                });
            }
        },
        /**
         * 加载画图控件方法
         * @param map 地图对象
         */
        addDrawTools: function (map) {
            var drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);
            var drawControl = new L.Control.Draw({
                position: 'topright',
                draw: {
                    polyline: true,
                    polygon: true,
                    circle: true,
                    marker: true
                },
                edit: {
                    featureGroup: drawnItems,
                    remove: true
                }
            });
            map.addControl(drawControl);
            map.on('draw:created', function (e) {
                var type = e.layerType,
                    layer = e.layer;

                if (type === 'marker') {
                    layer.bindPopup('A popup!');
                }

                drawnItems.addLayer(layer);
            });
        }
    });
    sefon.control = function (map, controls) {
        return new sefon.Control(map, controls);
    }
})();