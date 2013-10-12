var shell = require('shelljs')
,   harp  = require('harp')
,   path  = require('path')

module.exports = function(grunt) {
    
    // init ceremonies
    //
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            'www/x.js': ['lib/index.js']
        },

        watch: {
            files: ["lib/**/*.js", 'test/**/*.js'],
            tasks: ['browserify', 'test']
        },

        concurrent: {
            target: { 
                tasks:['serve', 'watch'],
                options:{logConcurrentOutput: true}
            }
        },

        'gh-pages': {
            options: {
                base: 'www'
            },
            src: ['**']
        }
    })
    
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-gh-pages')

    // custom business 
    //
    grunt.registerTask('default', ['concurrent:target'])
    
    grunt.registerTask('test', 'Run the unit tests.', function() {
        shell.exec('npm test')
    })

    grunt.registerTask('serve', 'Serve www with Harp.', function() {
        var done = this.async()
        var projectPath = path.join(__dirname, 'www')
        harp.server(projectPath, [], function cb() {
            grunt.log.write("\nHarp server is now running at http://localhost:9966\n\n")
        })        
    })
}
