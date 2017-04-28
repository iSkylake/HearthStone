const path = require('path');

module.exports = {
	entry: './app/app.jsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			Main: path.resolve(__dirname, 'app/components/Main.js')
		},
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					},
					test: /\.jsx?$/,
					exclude: path.resolve(__dirname, '/node_modules')
			}
		]
	}
};