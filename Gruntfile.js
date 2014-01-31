'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'index.html': 'views/pages/index.jade',
          'projects.html': 'views/pages/projects.jade',
          'contacts.html': 'views/pages/contacts.jade'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};