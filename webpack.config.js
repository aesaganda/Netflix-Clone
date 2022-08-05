const { join } = require('path');
const path = require('path');

module.exports = {
    mode: 'production',
  entry: {
    indexJS : join(__dirname,'src','js','index.js')
  },
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
