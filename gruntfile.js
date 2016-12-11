module.exports = function(grunt) {
//require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    handlebars: {
        templates: {
            files:{
                'public/javascripts/templates.js' : 'views/**/*.tmpl'
            }
        },
        options: {
            namespace: 'teamApp.template'
        }
  },

  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  //grunt.registerTask('jst', ['jst']);

  grunt.registerTask('tmpl', 'build templates', function(){
      grunt.task.run('handlebars:templates')
  });

};