var server  = require('webpack-dev-server')
var config  = require('./webpack.config.js')
var path    = require('path')
var webpack = require('webpack');
var _       = require('lodash');

var devConfig = _.extend(config, {
    watch: true,
    port: 7000
})

var compiler = webpack(devConfig);

webserver = new server(compiler, {
    historyApiFallback: true,
    stats: {colors: true}
});

webserver.use('/', function(req, res) {
  res.sendFile(path.join( __dirname + "/dist/index.html"));
});

webserver.listen(devConfig.port, '0.0.0.0', function () {});

console.log('Running on port ' + devConfig.port);