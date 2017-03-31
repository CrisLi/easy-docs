const autoPrefixer = require('autoprefixer'); // eslint-disable-line

module.exports = {
  plugins: [
    autoPrefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
};
