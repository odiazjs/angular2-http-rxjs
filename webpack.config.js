var webpack            = require('webpack'),
    npmRoot            = __dirname + "/node_modules";

module.exports = {
  entry: {
    index: './src/index.ts'
  },

  output: {
    libraryTarget: 'umd',
    path: __dirname + "/dist",
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: "babel?presets[]=es2015!ts"
    },
      { include: /\.json$/, loaders: ['json'] },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true'}
    ]
  },


  eslint: {
    configFile: './.eslintrc'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  devtool: "source-map",

  plugins: [
  ]
}
