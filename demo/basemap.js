/**
 * 由  冯博 创建于 2016/8/9.
 * @file basemap
 * @description
 */

//var Url='../../../../leaflet/leaflet-demo/tile_google/{z}/{x}/{y}.png';
//var map = new L .map('map').setView([30.6729, 104.0758], 8);
//L.tileLayer(Url).addTo(map);

var Url = '../../../../leaflet/leaflet-demo/tile_google/{z}/{x}/{y}.png';
var map = new sefon.map('map').setView([30.6729, 104.0758], 8);
sefon.tileLayer(Url).addTo(map);