const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: './src/entry/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],

        plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/entry/index.html',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    devServer: {
        historyApiFallback: true,
    },
}
