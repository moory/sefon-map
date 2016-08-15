/**
 * 由  冯博 创建于 2016/8/15.
 * @file addGeoJSON
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

//var generateRandom = function (max, min) {
//    return parseInt(Math.random() * (max - min + 1) + min, 10);
//}

$.getJSON(geojsonUrl, function (res) {
    L.geoJson(res, {
        style: function (feature) {
            return {
                //color: 'rgb(' + generateRandom(255, 0) + ',' + generateRandom(255, 0) + ',' + generateRandom(255, 0) + '}'
                color: 'blue',
                fill: true,
                fillColor: 'white',
                weight: 2
            }
        },
        onEachFeature: function (feature, layer) {
            var popupContent = "";

            if (feature.properties && feature.properties.name) {
                popupContent += feature.properties.name;
                //针对经纬度和leaflet相反的数据
                feature.properties.cp=feature.properties.cp.reverse();
            }
            layer.bindPopup(popupContent);
        }
    }).addTo(map)
        .on('mouseover', function (layer) {
            layer.layer.setStyle({'fillColor': 'red'});
            layer.layer.openPopup(layer.layer.feature.properties.cp);
        })
        .on('mouseout',function(layer){
            layer.layer.setStyle({'fillColor': 'white'});
        })
})