
module.exports = function stage() {

    var elements = "map reg signin".split(' ')

    return {
        show: function(viewName) {
            elements.forEach(function(e, i) {
                document.getElementById(e).style.display = 'none'
            })
            document.getElementById(viewName).style.display = 'block'            
        } 
    }
}
