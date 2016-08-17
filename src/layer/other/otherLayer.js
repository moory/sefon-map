;
(function() {
//注册地图
    sefon.registerMap = function(name, url, map) {
        $.getJSON(url).done(function(res) {
            res &&
                (res.features.map(function(item) {
                    var latlng = [];
                    item.geometry.coordinates[0].map(function(array) {
                        latlng.push(array.reverse());
                    });
                    name = L.polygon(latlng, { //添加polygon
                        fill: true,
                        fillColor: 'white',
                        weight: 2
                    }).addTo(map)
                }))
        })
    }
})();