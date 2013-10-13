var fastClick = require('fastclick')
,   menu      = require('./menu')()
,   map       = require('./map')()
,   stage     = require('./stage')()
,   newyork   = [40.762485, -73.997513] 

// init ceremony
fastClick(document.body)
map.setView(newyork, 1000)
L.marker(newyork).addTo(map).bindPopup("Animal").openPopup()


// navigation events
menu.on({
    map: function() {
        menu.header.innerText = 'Primer'
        stage.show('map')
        map.invalidateSize()
    },
    reg: function() {
        menu.header.innerText = 'Register'
        stage.show('reg')
    },
    signin: function() {
        menu.header.innerText = 'Sign in'
        stage.show('signin')
    }, 
    camera: function() {
                
    },
    about: function() {
           
    }
})
