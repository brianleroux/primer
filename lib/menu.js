module.exports = function menu() {
    
    var hamburger = document.getElementById('slide-menu-button')
    ,   signin    = document.getElementById('signin-link')
    ,   map       = document.getElementById('map-link')
    ,   reg       = document.getElementById('reg-link')
    ,   header    = document.getElementById('header-text')

    var toggleGlobalNav = function(e) {
        var cl = document.body.classList
        cl.contains('left-nav') ? cl.remove('left-nav') : cl.add('left-nav')
    }

    hamburger.onclick = toggleGlobalNav

    signin.onclick = function(e) {
        document.getElementById('map').style.display = 'none'
        document.getElementById('signin').style.display = 'inline'
        document.getElementById('reg').style.display = 'none'
        header.innerText = 'Sign in'
        toggleGlobalNav()
    }

    map.onclick = function(e) {
        document.getElementById('map').style.display = 'block'
        document.getElementById('signin').style.display = 'none'
        document.getElementById('reg').style.display = 'none'
        header.innerText = 'Primer'
        toggleGlobalNav()
    }
    
    reg.onclick = function(e) {
        document.getElementById('map').style.display = 'none'
        document.getElementById('signin').style.display = 'none'
        document.getElementById('reg').style.display = 'inline'
        header.innerText = 'Register'
        toggleGlobalNav()
    }

    return {hamburger:hamburger, signin:signin, map:map, reg:reg}
}
