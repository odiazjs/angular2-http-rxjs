var webpackConfig = require('./webpack.config.js');

// Prep webpack config for prod
webpackConfig.output.filename = '[name].[hash].js';
webpackConfig.port = null

// Gruntfile.js
module.exports = function (grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    //Config
    grunt.initConfig({

        clean: ["target/webroot/*"],

        webpack: {
          index: webpackConfig
        }

    });

    //Tasks
    grunt.registerTask('build', [
        'clean',
        'webpack'
    ]);

    grunt.registerTask('release', ['build']);
    grunt.registerTask('snapshot', ['build']);
}

