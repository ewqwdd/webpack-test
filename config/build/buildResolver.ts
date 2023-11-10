import { ResolveOptions } from "webpack";


export default function buildResolver(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}