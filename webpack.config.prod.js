//webpack reference: webpack.github.io/docs/configuration.html
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,

	// Slower than inline-source-map,
	// but still allows us to see full code even when minified/transpiled/bundled
	devtool: 'source-map',
	noInfo: false,
	entry: {
		// Vendor.js bundle entry point where 3rd party tools are loaded
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		// Dist stands for distribution
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',

		// Generate entrpoint named files
		filename: '[name].js'
	},
	plugins: [
		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		// Leaves any imports in these chunks out of the separate bundle (main.js)
		new webpack.optimize.CommonsChunkPlugin({
			// Use the same name as the entry point key
			name: 'vendor'
		}),

		// Dynamically generate HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true
		}),

		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style','css']}
		]
	}
}
