import { type RuleSetRule } from 'webpack'
import { type buildParams } from './types/config'
import cssLoader from '../loaders/cssLoader'
import svgLoader from '../loaders/svgLoader'

export default function buildLoaders({ isDev }: buildParams): RuleSetRule[] {
    const cssLoader_ = cssLoader(isDev)
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader_ = svgLoader()

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [fileLoader, tsLoader, cssLoader_, svgLoader_]
}
