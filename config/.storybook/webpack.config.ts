import webpack, {Configuration, } from "webpack"
import {type buildParams} from '../build/types/config'
import cssLoader from '../loaders/cssLoader'
import fontLoader from '../loaders/fontLoader'
import path from "path"

export default ({ config }: {config: Configuration}) => {
    const paths: buildParams['paths'] = {
        entry: '',
        html: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    
    const rules = config?.module?.rules?.map(rule => {
        // Check if rule is a valid RuleSetRule and has 'test' property
        //@ts-ignore
        if (rule && typeof rule !== 'boolean' && 'test' in rule && rule.test instanceof RegExp && rule.test.test('.svg')) {
            // Check if rule has 'exclude' property
            if ('exclude' in rule) {
                if (rule.exclude) {
                    if (Array.isArray(rule.exclude)) {
                        rule.exclude.push(/\.svg$/i);
                    } else {
                        rule.exclude = [rule.exclude, /\.svg$/i];
                    }
                } else {
                    rule.exclude = /\.svg$/i;
                }
            } else {
                rule.exclude = /\.svg$/i;
            }
        }
        return rule;
    }).filter(Boolean); // excludes svg from loaders that processing it

    config.module!.rules!.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })
    config.module!.rules!.push(cssLoader(true))
    config.module!.rules!.push(fontLoader())

    config.resolve?.roots?.push(path.resolve(__dirname, '../../public'))

    return config
}