module.exports = {
  entry: './app/App.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: /app/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react'
      }
    ]
  }
};