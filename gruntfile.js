module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            customTemplate: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/**/*spec.js',
                    polyfills: 'bower_components/traceur/traceur.js'
                }
            }
        }
    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', 'jasmine');
};