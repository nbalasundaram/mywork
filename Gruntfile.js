'use strict';

var _ = require('lodash');


var gruntConfig = {

    simplemocha: {
        sample: {
            options: {
                timeout: 60000,
                reporter: 'spec'

            },


            src: ['test/sample/basic*.js']


        }
    }


};





module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig(gruntConfig);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-simple-mocha');




    grunt.registerTask('default', ['simplemocha:sample']);
};
