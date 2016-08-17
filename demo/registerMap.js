/**
 * 由  冯博 创建于 2016/8/15.
 * @file addFeature
 * @description
 */
var southWest = L.latLng(35.42486791930558, 97.05322265625001);
var northEast = L.latLng(25.880847747329447, 108.62800598144533);
var bounds = L.latLngBounds(southWest, northEast);
var Url = './maptile/tile_google/{z}/{x}/{y}.png';
var geojsonUrl = './config/sichuanGeoJson.json';
var geojsonUrl = './config/wuhou-lite.json';
var map = new sefon.map('map').setView([30.6729, 104.0758], 8).setMaxBounds(bounds);
sefon.tileLayer(Url).addTo(map);
// var baidu = new L.Baidu();
// map.addLayer(baidu);

sefon.control(map);

map.on('click', function(e) {
    console.log(e.latlng);
})
sefon.registerMap('sichuan', geojsonUrl, map);