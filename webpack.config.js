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
			Search: path.resolve(__dirname, 'app/components/Search.jsx'),
			SearchForm: path.resolve(__dirname, 'app/components/SearchForm.jsx'),
			CardDisplay: path.resolve(__dirname, 'app/components/CardDisplay.jsx'),
			Random: path.resolve(__dirname, 'app/components/Random.jsx'),
			RandomForm: path.resolve(__dirname, 'app/components/RandomForm.jsx'),
			CardSet: path.resolve(__dirname, 'app/components/Set.jsx'),
			HearthstoneAPI: path.resolve(__dirname, 'app/api/HearthstoneAPI.js')
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
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader?name=/img/[name].[ext]'
			}
		]
	}
};