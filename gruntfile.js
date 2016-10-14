module.exports = function (grunt) {

  // Configure grunt
grunt.initConfig({
  cacheBust: {
    options: {
    assets: ['assets/**/*'],
    baseDir: './public/',
    length:6
    },
  taskName: {
    files: [{   
    expand: true,
    cwd: 'public/',
    src: ['templates/homepage.html']
    }]
  }
  }
});

  // Load in `grunt-spritesmith`
 grunt.loadTasks('./tasks');
  grunt.registerTask('default', ['cacheBust']);
};  