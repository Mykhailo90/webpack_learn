const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        main: './index.js',
        player: './player.js',
        vendor: ['react', 'react-dom']
    },
    output:{
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    watch: true,
    devServer: {
        port: 8080,
    },
    devtool: 'source-map',

    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'vendor',
              chunks: 'all',
              priority: 1,
              enforce: true
            }
          }
        }
      },


    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "babel-plugin-transform-class-properties"
                          ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                        {
                            loader: 'style-loader',

                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ],
            },
            {
                test: /\.(gif|svg|png|jpg|jpe?g)$/,
                use: {
                        loader: "url-loader",
                        options: {
                            limit: 2000,
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
            }
            
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Webpack the best'
        })
    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx', '*']
    },
};