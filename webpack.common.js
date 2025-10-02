const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script/index.js',
  
  plugins: [
    new HtmlWebpackPlugin({
      // Tell the plugin to use your new HTML file as a template
      template: './src/index.html',
    }),
  ], 

  module: {
    rules: [
      {
        test: /\.css$/, // This pattern matches any file that ends with .css
        use: [
          'style-loader', // Injects the CSS into the DOM
          'css-loader',   // Interprets @import and url() like import/require()
        ],
      },
    ],
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Removes previous build files before rebuilding the project
  },
};
