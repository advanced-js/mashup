module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: {
        src: ['**/*.js', '!node_modules/**/*']
      },
      options: {
        // http://www.jshint.com/docs/options/
        eqeqeq: true,
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
