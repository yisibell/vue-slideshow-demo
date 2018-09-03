var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");


module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|gif|png|jpeg|bmp|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["url-loader"]
            },
            {
                test: /\.js$/,
                //不对node_modules中的内容做处理！
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8088,
        hot: true,
        contentBase: path.join(__dirname, "src"),
        compress: true
    }
}