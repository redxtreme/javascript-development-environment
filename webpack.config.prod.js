//webpack reference: webpack.github.io/docs/configuration.html
import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,

		// Slower than inline-source-map,
		// but still allows us to see full code even when minified/transpiled/bundled
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {

			// Dist stands for distribution
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
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
