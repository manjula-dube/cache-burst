module.exports = function (grunt) {

  // Configure grunt
grunt.initConfig({
  cacheBust: {
    options: {
    assets: ['assets/**/*'],
    baseDir: './public/'
    },
  taskName: {
    files: [{   
    expand: true,
    cwd: 'public/',
    src: ['templates/**/*.html', 'assets/**/*']
    }]
  }
  }
});

  // Load in `grunt-spritesmith`
 grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['cacheBust']);
};  