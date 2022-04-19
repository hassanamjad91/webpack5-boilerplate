const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'public')
    },
    module: {
			rules: [
				{
					loader: 'babel-loader',				
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
					  'style-loader',
					  'css-loader'
					]
				}
			]
    },
	mode: 'development'
};