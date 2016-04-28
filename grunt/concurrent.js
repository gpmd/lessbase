module.exports = {

  // Task options
  options: {
    limit: 3
  },

  // Dev tasks
  devFirst: [
    'clean:dist'
  ],
  devSecond: [
    'less:dev'
  ],
  devThird: [
    'autoprefixer'
  ],

  // Production tasks
  prodFirst: [
    'clean:dist'
  ],
  prodSecond: [
    'less:prod'
  ],
  prodThird: [
    'autoprefixer'
  ],
  prodFourth: [
    'cssmin'
  ]
};
