var map = L.mapbox.map('map', 'examples.map-y7l23tes').setView([37.9, -77], 5);


document.getElementById('slide-menu-button').onclick = function(e) {
    var cl = document.body.classList
    cl.contains('left-nav') ? cl.remove('left-nav') : cl.add('left-nav')
}
