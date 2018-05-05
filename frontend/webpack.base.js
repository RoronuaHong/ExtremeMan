const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const es3ifyPlugin = require('es3ify-webpack-plugin');
const theme = require('./package.json').theme;

const distPath = path.resolve(__dirname, "./dist");
const antdPath = path.join(__dirname, "/node_modules/antd-mobile");
const template = "./src/index.html";

const config = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: distPath,
        filename: "js/[name].[hash].js"
    },
    resolve: {
        extensions: [
            ".js", 
            ".css", 
            ".scss", 
            ".png", 
            ".jpg", 
            ".jpeg", 
            ".gif",
            ".web.js",
            ".json"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        'Chrome >= 35',
                                        'Firefox >= 38',
                                        'Edge >= 12',
                                        'Explorer >= 10',
                                        'iOS >= 8',
                                        'Safari >= 8',
                                        'Android 2.3',
                                        'Android >= 4',
                                        'Opera >= 12'
                                    ],
                                    cascade: true,
                                    add: true,
                                    remove: true
                                })
                            ]
                        }
                    },
                    /* {
                        loader: 'webpack-px-to-rem',
                        // 这个配置是可选的
                        query: {
                            // 1rem=npx 默认为 10
                            basePx: 75,
                            // 只会转换大于min的px 默认为0
                            // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示 
                            min: 1,
                            // 转换后的rem值保留的小数点后位数 默认为3 
                            floatWidth: 3
                        }
                    } */
                ]
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: theme
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|bmp)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            name: true,
            chunks: 'all',
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            cacheGroups: {
                default: {
                    priority: 1,
                    enforce: true,
                    reuseExistingChunk: true
                },
                vendors: {
                    priority: 2,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new es3ifyPlugin(),
        new ExtractTextPlugin({
            filename: 'main.[hash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'index.html',
            favicon: "./src/styles/images/slimlogo.png", 
            hash: true,
            title: "React Component"
        })
    ]
}

module.exports = config;
