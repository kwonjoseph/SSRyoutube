const path = require('path');
const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
