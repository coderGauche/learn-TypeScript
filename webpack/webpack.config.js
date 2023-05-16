/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 23:24:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 23:32:05
 * @FilePath: /webpack/webpack.cnfig.js
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    devServer: {},
    resolve: {
        extensions: [".ts", ".js", ".cjs", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.(jpe?g|png)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}