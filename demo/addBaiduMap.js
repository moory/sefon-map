L.TileLayer.WebDogTileLayer = L.TileLayer.extend({
    getTileUrl: function(tilePoint) {
        var urlArgs,
            getUrlArgs = this.options.getUrlArgs;

        if (getUrlArgs) {
            var urlArgs = getUrlArgs(tilePoint);
        } else {
            urlArgs = {
                z: tilePoint.z,
                x: tilePoint.x,
                y: tilePoint.y
            };
        }

        return L.Util.template(this._url, L.extend(urlArgs, this.options, { s: this._getSubdomain(tilePoint) }));
    }
});

L.tileLayer.webdogTileLayer = function(url, options) {
    return new L.TileLayer.WebDogTileLayer(url, options);
};


var southWest = L.latLng(35.42486791930558, 97.05322265625001);
var northEast = L.latLng(25.880847747329447, 108.62800598144533);
var bounds = L.latLngBounds(southWest, northEast);
var Url = './maptile/baidu1013/{z}/{x}/{y}.png';
// var Url = './maptile/google614/{z}/{x}/{y}.png';
var map = new L.map('map').setView([31.22, 121.48], 11);
var options = {
    // subdomain: '012',
    getUrlArgs: function(tilePoint) {
        if (!tilePoint) {
            return "";
        }
        var z = tilePoint.z;
        var x = tilePoint.x;
        var y = Math.pow(2, tilePoint.z) - 1 - tilePoint.y;
        // if (x < 0) {
        //     x = "M" + (-x);
        // }
        // if (y < 0) {
        //     y = "M" + (-y);
        // }
        return {
            z: z,
            x: x,
            y: y
        };
    }
};
L.tileLayer.webdogTileLayer(Url, options).addTo(map);
// var geojsonUrl = './config/sichuanGeoJson.json';
// var geojsonUrl = './config/wuhou-lite.json';
// var map = new L.map('map').setView([30.6729, 104.0758], 8).setMaxBounds(bounds);
// // sefon.tileLayer(Url).addTo(map);
// // var baidu = new L.Baidu('wEdGBRYrr5t1tF9X9cGbSmkB');
// // map.addLayer(baidu);
// L.tileLayer(Url).addTo(map);

// map.on('click', function(e) {
//     console.log(e.latlng);
// })

// var funcLayer = new L.TileLayer.Functional(function(view) {
//         // var url = 'http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{y}/{x}.jpg'
//         var url = Url
//             .replace('{z}', view.zoom)
//             .replace('{x}', view.tile.row)
//             .replace('{y}', view.tile.column)
//             .replace('{s}', view.subdomain);
//         return url;
//     }
//     // , {
//     //     subdomains: '1234'
//     // }
// );

// var map = new L.Map('map', { center: new L.LatLng(31.22, 121.48), zoom: 11, layers: [funcLayer] });