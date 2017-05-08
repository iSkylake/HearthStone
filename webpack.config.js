const path = require('path');

module.exports = {
	entry: './app/app.jsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			Main: path.resolve(__dirname, 'app/components/Main.jsx'),
			Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
			Home: path.resolve(__dirname, 'app/components/Home.jsx'),
			Card: path.resolve(__dirname, 'app/components/Card.jsx'),
			CardForm: path.resolve(__dirname, 'app/components/CardForm.jsx'),
			CardDisplay: path.resolve(__dirname, 'app/components/CardDisplay.jsx'),
			Random: path.resolve(__dirname, 'app/components/Random.jsx')
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