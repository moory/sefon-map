/**
 * 由  冯博 创建于 2016/8/15.
 * @file addFeature
 * @description
 */
var southWest = L.latLng(35.42486791930558, 97.05322265625001);
var northEast = L.latLng(25.880847747329447, 108.62800598144533);
var bounds = L.latLngBounds(southWest, northEast);
var Url = './tile_google/{z}/{x}/{y}.png';
var map = new sefon.map('map').setView([30.6729, 104.0758], 8).setMaxBounds(bounds);
sefon.tileLayer(Url).addTo(map);
sefon.control(map);

map.on('click', function (e) {
    console.log(e.latlng);
})

var latlngs = [
    [30.663017481733604, 104.06627655029297],
    [30.659325912150035, 104.060955047607421],
    [30.65253305571634, 104.06147003173827],
    [30.652976082642528, 104.07279968261719],
    [30.661836194808348, 104.07125473022461]
];
//var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
var polygon = L.polygon(latlngs, {color: 'blue'}).addTo(map).bindPopup("chengdu");
map.fitBounds(polygon.getBounds());
//console.log(polygon.toGeoJSON());