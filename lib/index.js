var fastClick = require('fastclick')
,   menu      = require('./menu')()
,   map       = require('./map')()
,   stage     = require('./stage')()
,   header    = document.getElementById('header-text')
,   newyork   = [40.762485, -73.997513] 

// init ceremony
fastClick(document.body)
map.setView(newyork, 1000)


// navigation events
menu.on({
    map: function() {
        header.innerText = 'Primer'
        stage.show('map')
        map.invalidateSize()
    },
    reg: function() {
        header.innerText = 'Register'
        stage.show('reg')
    },
    signin: function() {
        header.innerText = 'Sign in'
        stage.show('signin')
    }
})
