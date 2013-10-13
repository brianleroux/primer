module.exports = function menu() {
    
    var self = this
    this.eventHash = {}

    var hamburger = document.getElementById('slide-menu-button')
    ,   signin    = document.getElementById('signin-link')
    ,   map       = document.getElementById('map-link')
    ,   reg       = document.getElementById('reg-link')

    var toggleGlobalNav = function(e) {
        var cl = document.body.classList
        cl.contains('left-nav') ? cl.remove('left-nav') : cl.add('left-nav')
    }

    hamburger.onclick = toggleGlobalNav

    signin.onclick = function(e) {
        self.eventHash.signin.call(this, e)
        toggleGlobalNav()
    }

    map.onclick = function(e) {
        self.eventHash.map.call(this, e)
        toggleGlobalNav()
    }
    
    reg.onclick = function(e) {
        self.eventHash.reg.call(this, e)
        toggleGlobalNav()
    }

    return {
        header: document.getElementById('header-text'),
        on: function(eventHash) {
            self.eventHash = eventHash
        }
    }
}
