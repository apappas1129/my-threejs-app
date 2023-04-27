const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      // three$: path.resolve(__dirname, 'node_modules/three/src/Three.js'),
      three: path.resolve(__dirname, 'node_modules/three'),
      // add any other aliases for Three.js modules you may need here
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Three.js App',
      template: './index.html',
      filename: 'index.html',
    }),
  ],
};