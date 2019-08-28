const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use:['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  }
};