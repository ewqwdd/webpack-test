import { type ResolveOptions } from 'webpack'
import { type buildParams } from './types/config'

export default function buildResolver(options: buildParams): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index']
    }
}
