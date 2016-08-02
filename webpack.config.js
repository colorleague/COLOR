var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src' //will look for index.js
	],

	output: { //will place bundled js
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: { // Looking for files to bundle
		modulesDirectories: ['node_modules', 'src'],
		extension: ['', '.js', '.scss']
	},
	module: {
		loaders:[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		},
		{
			test: /\.html$/,
			loader: 'raw'

		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			loaders: [
				'style',
				'css',
				'autoprefixer?browsers=last 3 versions',
				'sass?outputStyle=expanded'
			]
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
	],
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}
}