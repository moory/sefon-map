/**
 * 由  冯博 创建于 2016/8/15.
 * @file addFeature
 * @description
 */
var southWest = L.latLng(35.42486791930558, 97.05322265625001);
var northEast = L.latLng(25.880847747329447, 108.62800598144533);
var bounds = L.latLngBounds(southWest, northEast);
var Url = './tile_google/{z}/{x}/{y}.png';
var geojsonUrl = './config/si_chuan_geo.json';
var map = new sefon.map('map').setView([30.6729, 104.0758], 8).setMaxBounds(bounds);
sefon.tileLayer(Url).addTo(map);
sefon.control(map);

map.on('click', function (e) {
    console.log(e.latlng);
})
var getZoneData = function (geojsonUrl) {
    return $.getJSON(geojsonUrl);
}
var zoneNameListHtml = '';
var zoneLayer = null;
getZoneData(geojsonUrl)
    .done(function (res) { //构造左边地域树
        res.features.map(function (res) {
            zoneNameListHtml += '<li><a href="javascript:void(0)" data-value="' + res.properties.name + '"' + '>' + res.properties.name + '</a></li>'
        });
    }).then(function () {//将地域数据放到ul中
        $('ul').html(zoneNameListHtml);
    }).then(function () {
        $('li a').on('click', function (e) {//给地域注册点击事件
            e.stopPropagation();
            zoneLayer && map.removeLayer(zoneLayer);
            var zoneName = $(e.currentTarget).data('value');
            getZoneData(geojsonUrl).done(function (res) {
                res.features.map(function (item) {
                    var latlng = [];
                    if (item.properties.name === zoneName) {
                        item.geometry.coordinates[0].map(function (array) {
                            latlng.push(array.reverse());
                        });
                        zoneLayer = L.polygon(latlng, {//添加polygon
                            fill: true,
                            fillColor: 'white',
                            weight: 2
                        }).addTo(map)
                        map.setView(item.properties.cp.reverse())//设置地图中心点
                    }
                })
            })
        })
    });