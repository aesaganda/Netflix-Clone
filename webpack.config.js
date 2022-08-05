const { join } = require('path');
const path = require('path');

module.exports = {
    mode: 'production',
  entry: {
    indexJS : join(__dirname,'src','js','index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
