// import webpack functions
var webpack = require('webpack');
// manage file paths
var path = require('path');

// make code avaiable in externals
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src' // Looking for index.js
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.scss']
	},
	module: {
		loaders: [

		{
			test:/\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		},
		{
			test:/\.scss$/,
			loaders: ['style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
		}
		]
	},
	node: {
	    console: 'empty',
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
	  },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}