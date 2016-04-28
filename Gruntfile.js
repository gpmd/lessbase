module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: true,
    init: true,

    data: {
      project: {
        src: 'src',
        dist: 'dist'
      }
    }
  });
};
