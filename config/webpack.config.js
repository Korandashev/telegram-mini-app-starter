import path from "path";
import webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";

const basePath = path.join(path.resolve(), "src");
const env = process.env.NODE_ENV || "development";

export default {
  entry: {
    main: path.join(basePath, "index.tsx"),
  },

  output: {
    path: path.join(basePath, "..", "build"),
    publicPath: env === "development" ? "/" : "",
    filename: "[name].[contenthash].js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      h: ["preact", "h"],
    }),
    new HtmlPlugin({
      template: path.join(basePath, "index.html"),
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "@app": path.join(basePath, "app"),
    },
  },

  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        loader: "babel-loader",
        include: [basePath],
      },
    ],
  },
};
