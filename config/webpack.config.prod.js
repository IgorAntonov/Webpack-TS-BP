const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
  entry: path.resolve(ROOT_DIR, "src/index.tsx"),
  output: {
    filename: "js/[name].[chunkhash:8].js",
    path: path.resolve(ROOT_DIR, "build"),
    publicPath: "/"
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".ts", '.tsx', ".json"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(ROOT_DIR, "node_modules"),
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, "public/index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
  ]
};
