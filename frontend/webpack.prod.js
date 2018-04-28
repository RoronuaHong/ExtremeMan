const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRadio: 0.8
        }),
        new CleanWebpackPlugin(["dist"]),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),       //分配ID, 优先考虑使用最多的模块
        new webpack.optimize.DedupePlugin(),                //删除类似的重复代码
        new webpack.optimize.AggressiveMergingPlugin(),     //合并块
    ]
});
