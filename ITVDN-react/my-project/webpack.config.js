var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                        loader: 'babel-loader',
                    },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules:true
                        }
                    },
                    {loader: 'sass-loader'},
                ],
                exclude: [/node_modules/, /puplic/]
            },
            {
                test: /\.gif$/,
                use: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                use: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                use: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg$/,
                use: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                use: {loader: 'babel-loader'},
                exclude: [/node_modules/, /puplic/]
            },
            {
                test: /\.json$/,
                use: "json-loader"
            }      
        ]
    }
}