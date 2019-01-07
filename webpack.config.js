const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// provide these in every JS file without having to import
const providePluginList = {
	$: 'jquery',
	jQuery: 'jquery',
	'window.jQuery': 'jquery',
}

module.exports = (env, argv) => ({
	entry: {
		bundle: path.join(__dirname, 'src', 'js', 'index.js'),
	},

	output: {
		// filename: 'bundle.js',
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},

	performance: {
		hints: false
	},

	stats: 'verbose',

	/*
		separate app js from vendor js
	*/
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors.bundle",
					chunks: "all"
				}
			}
		}
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: 
					argv.mode === 'production' ? 
					ExtractTextPlugin.extract({
						publicPath: '',
						fallback: 'style-loader?sourceMap',

						/*
							Loaders run last to first
							ie, sass -> postcss -> css
						*/
						use: [
							{
								loader: 'css-loader'
							},
							{
								loader: 'postcss-loader',
								options: {
									ident: 'postcss',
										plugins: (loader) => [
										require('autoprefixer')(),
										require('postcss-flexbugs-fixes')()
									]
								}
							},
							{
								loader: 'sass-loader'
							}
						]
					})
					:
					[
						{
							loader: 'style-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								ident: 'postcss',
								plugins: (loader) => [
									require('autoprefixer')(),
									require('postcss-flexbugs-fixes')()
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 
					argv.mode === 'production' ?
					[
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					]
					:
					[
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						},
						'webpack-module-hot-accept'
					]
			},
			{
				test: /\.hbs$/, 
				exclude: /node_modules/,
				loader: 'handlebars-loader',
				options: {
					helperDirs: [
						path.join(__dirname, 'src', 'templates', 'helpers')
					]
				}
			},
			{
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'type/'
                    }
                }]
            },

            // has trouble picking up the dynamic content that handlebars constructs
            // so commenting for now and will set up properly later when need
            // to implement optimization
			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			   use: [
			    'file-loader',
			    {
			      loader: 'image-webpack-loader',
			      options: {
			      	/*
			      		No processing is done when webpack 'debug' mode is used and 
			      		the loader acts as a regular file-loader. 
			      		Use this to speed up initial and, to a lesser extent, 
			      		subsequent compilations while developing or using webpack-dev-server. 
			      		Normal builds are processed normally, outputting optimized files.
			      	*/
			      	disable: true,

			        mozjpeg: {
			          progressive: true,
			          quality: 70
			        },

			        // optipng.enabled: false will disable optipng
			        optipng: {
			          enabled: false,
			        },

			        pngquant: {
			          quality: '65-90',
			          speed: 4
			        },

			        gifsicle: {
			          interlaced: false,
			        },

			        // the webp option will enable WEBP
			        webp: {
			          quality: 75
			        }
			      }
			    },
			  ],
			}
		]
	},

	devServer: {
		publicPath: '/dist/',
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		hot: true,
		overlay: {
		  warnings: true,
		  errors: true
		},
		port: 2222,
		inline: true,
		progress: true
	},

	devtool: 
		argv.mode === 'production' ? 
			'eval'  // @todo : disable for production
			:
			'eval',

	plugins: 
		argv.mode === 'production' ? 
			[
				new CleanWebpackPlugin(path.join(__dirname, 'dist')),
				new webpack.ProvidePlugin(providePluginList),
				new ExtractTextPlugin({
					// full dir path causes stuck at 95% emitted error
					// https://github.com/webpack/webpack/issues/2908
					// filename: path.join(__dirname, 'dist', 'app.dist.css')
					filename: 'app.dist.css'
				}),
				new HtmlWebpackPlugin({
						template: './src/index.html',
						inject: 'body'
				}),
				new CopyWebpackPlugin([
					{ from: 'src/images', to: 'images' },
					{ from: 'src/admin', to: 'admin' }
				]),
				new UglifyJSPlugin({
					exclude: 'vendors',
					uglifyOptions: {
						parallel: true,
						safari10: true
					}
				})
			]
			:
			// dev
			[
				new webpack.ProvidePlugin(providePluginList),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin(),
				new webpack.ProgressPlugin({ profile: false }),
				new HtmlWebpackPlugin({
						template: './src/index.html',
						inject: 'body'
				}),


				new CopyWebpackPlugin([
					{ from: 'src/images', to: 'images' },
					{ from: 'src/admin', to: 'admin' }
				]),
				new WriteFileWebpackPlugin()
			]
});
