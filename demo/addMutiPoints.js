var southWest = L.latLng(31.8822, 120.7509);
var northEast = L.latLng(30.7041, 122.0279);
var bounds = L.latLngBounds(southWest, northEast);
var Url = './maptile/google-shanghai616/{z}/{x}/{y}.png';
var map = new sefon.map('map', {
    minZoom: 12,
    maxZoom: 13
}).setView([31.198853, 121.432829], 12).setMaxBounds(bounds);
var marker = null;
sefon.tileLayer(Url).addTo(map);

$.getJSON('/getData').done(function(res) {
    res.list.map(function(item) {
        // sefon.Marker([item.lat, item.lng]).addTo(map);
        createIcon(item.lat, item.lng, item.score);
    });
});
var createIcon = function(lat, lng, score) {
    var color = "";
    if (score < 33) {
        color = "green";
    }
    if (33 < score && score < 66) {
        color = "yellow";
    }
    if (score > 66) {
        color = "red";
    }
    var point = L.latLng(+lat, +lng);
    var Iconconfig = new L.DivIcon({
        className: 'map-' + color
    })
    marker = L.marker(point, {
        icon: Iconconfig,
        title: score
    }).addTo(map)
};
// sefon.Marker([31.198853, 121.432829]).addTo(map);