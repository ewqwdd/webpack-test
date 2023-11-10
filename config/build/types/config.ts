export type BuildMode = 'production' | 'development'

export interface buildParams {
    paths: {
        entry: string,
        output: string,
        html: string
    },
    mode: BuildMode,
    port: number,
    isDev: boolean
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}