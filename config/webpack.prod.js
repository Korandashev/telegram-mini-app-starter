/* global __dirname */
import webpack from "webpack";
import { merge } from "webpack-merge";
import config from "./webpack.config.js";

export default merge(config, {
  mode: "production",
  devtool: false,

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],

  optimization: {
    minimize: true,
  },
});
