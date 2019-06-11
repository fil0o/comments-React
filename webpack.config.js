var path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path:  path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '']
          // }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   compress: true,
  //   port: 9000
  // }
}
