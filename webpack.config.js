const path = require('path');

module.exports = {
	entry: './com/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devtool: 'inline-source-map'
}