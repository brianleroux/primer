module.exports = function map() {
    var map = L.mapbox.map('map', 'examples.map-y7l23tes', {zoomControl:false}).setView([40.762485, -73.997513], 10000)
    return map
}
