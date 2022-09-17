const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.html$/i,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}