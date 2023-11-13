import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolver from './buildResolver'
import { type buildParams } from './types/config'
import type webpack from 'webpack'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import webpackDevServer from 'webpack-dev-server'
import buildDevServer from './buildDevServer'

export default function buildWebpackConfig(options: buildParams): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolver(options),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
        optimization: {
            runtimeChunk: 'single'
        }
    }
}
