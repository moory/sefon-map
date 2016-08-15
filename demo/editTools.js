/**
 * 由  冯博 创建于 2016/8/9.
 * @file basemap
 * @description
 */
var southWest = L.latLng(35.42486791930558, 97.05322265625001);
var northEast = L.latLng(25.880847747329447, 108.62800598144533);
var bounds = L.latLngBounds(southWest, northEast);
var Url = '../../../../leaflet/leaflet-demo/tile_google/{z}/{x}/{y}.png';
var map = new sefon.map('map').setView([30.6729, 104.0758], 8).setMaxBounds(bounds);
sefon.tileLayer(Url).addTo(map);
//sefon.Marker([30.7617, 103.9526]).addTo(map);
sefon.lang= sefon.resources['zh-CN'];
sefon.control(map,['scale','Draw']);