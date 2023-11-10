import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import { buildParams } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default function buildPlugins({paths: {html}}: buildParams): WebpackPluginInstance[]{

    return [
        new HtmlWebpackPlugin({
            template: html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}