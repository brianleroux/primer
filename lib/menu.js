module.exports = function menu() {
    
    var el = document.getElementById('slide-menu-button')
    
    el.onclick = function(e) {
        var cl = document.body.classList
        cl.contains('left-nav') ? cl.remove('left-nav') : cl.add('left-nav')
    }

    return el
}
