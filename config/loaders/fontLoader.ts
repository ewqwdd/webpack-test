export default function fontLoader() {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
    }
}
