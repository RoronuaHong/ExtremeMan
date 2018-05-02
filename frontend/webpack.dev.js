const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: 'cheap-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: "7713",
        inline: true,   //实时刷新
        hot: true,
        open: true,
        compress: true,
        host: "0.0.0.0",
        historyApiFallback: {
            index: '/pa/index.html'
        },
        proxy: {
            
        }
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
});
