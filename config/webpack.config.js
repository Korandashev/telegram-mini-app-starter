import path from "path";
import webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const basePath = path.join(path.resolve(), "src");
const isDevelopment = (process.env.NODE_ENV || "development") === "development";

export default {
  entry: {
    main: path.join(basePath, "index.tsx"),
  },

  output: {
    path: path.join(basePath, "..", "build"),
    publicPath: isDevelopment ? "/" : "",
    filename: "[name].js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      h: ["preact", "h"],
    }),
    new MiniCssExtractPlugin(),
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
      {
        test: /\.module.css$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[hash:base64:4]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
