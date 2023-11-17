import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type buildParams } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildPlugins(params: buildParams): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: params.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(params.isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
