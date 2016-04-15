var webpack            = require('webpack'),
    npmRoot            = __dirname + "/node_modules",
    HtmlWebpackPlugin  = require( 'html-webpack-plugin' ),
    CommonsChunkPlugin = require( "webpack/lib/optimize/CommonsChunkPlugin" )

module.exports = {
  entry: {
      vendors: [
        './node_modules/reflect-metadata/Reflect', 
        './node_modules/angular2/core',
        './node_modules/rxjs/Rx',
        './node_modules/zone.js/dist/zone',
        'lodash'
      ],
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
    {
            test   : /\.html$/,
            exclude: [ /node_modules/ ],
            loader : "html"
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
      new CommonsChunkPlugin( "vendors", "vendors.[hash].js" ),
      new HtmlWebpackPlugin( {
            title   : 'httpRxJs',
            template: './index.html',
            inject  : true
        } )
  ]
}
