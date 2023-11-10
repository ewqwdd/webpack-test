import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { buildParams } from "./types/config";


export default function buildLoaders({isDev}: buildParams): RuleSetRule[]{

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ?  'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                },
                // auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                // localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            }
          },
          "sass-loader",
        ],
      }
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader,
        cssLoader
    ]
}