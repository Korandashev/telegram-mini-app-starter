import path from "path";
import { merge } from "webpack-merge";
import config from "./webpack.config.js";

const basePath = path.join(path.resolve(), "src");

export default merge(config, {
  mode: "development",

  devServer: {
    port: 80,
    static: {
      directory: path.join(basePath, "build"),
    },
  },
});
