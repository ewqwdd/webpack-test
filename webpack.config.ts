import path from "path";
import webpack from "webpack";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, buildParams } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: buildParams["paths"] = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";

  const config = buildWebpackConfig({ paths, mode, port: 3000, isDev });

  return config;
};
