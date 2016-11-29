// import webpack functions
var webpack = require('webpack');
// manage file paths
var path = require('path');

// make code avaiable in externals
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extension: ['', '.js', 'scss']
	},
	module: {
		loaders: [
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