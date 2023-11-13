import { type buildParams } from './types/config'

export default function buildDevServer({ port }: buildParams) {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
