module.exports = function map() {
    console.log('called map')
    var map = L.mapbox.map('map', 'examples.map-y7l23tes', {zoomControl:false}).setView([37.9, -77], 5)
    return map
}
