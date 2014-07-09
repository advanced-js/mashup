module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: {
        src: [
          '*.html',
          '**/*.js',
          '!node_modules/**/*'
        ]
      },
      // http://www.jshint.com/docs/options/
      options: {
        eqeqeq: true,
        extract: 'auto', // http://bahmutov.calepin.co/linting-javascript-inside-html.html
        forin: true,
        freeze: true,
        latedef: true,
        maxdepth: 4,
        maxparams: 3,
        maxstatements: 10,
        newcap: true,
        unused: true
      }
    },
    validation: {
      options: {
        failHard: true,
        reset: true
      },
      files: {
        src: ['*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['jshint', 'validation']);
};
