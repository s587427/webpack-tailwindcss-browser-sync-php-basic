const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"), // * path.resolve()  => 返回拼接的絕對路徑, __dirname => 當前檔案(模塊)的目錄路徑
    filename: "bundle.js",
    clean: true, // ! 重新編譯前刪除打包之前的文件
  },
  devtool: "inline-source-map", // can find source code error
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },

      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          /*"style-loader",*/
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ], // * parse css needs
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // * parse image needs
        type: "asset/resource", // built-in
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    // ! 實現瀏覽器hot reload browser-sync(可搭配 devServer 或者直接使用watch 2選1,  這邊是使用watch)
    new BrowserSyncPlugin({
      port: 3000,
      host: "localhost",
      // server or proxy 只能選一個
      // server: { baseDir: ["dist"] },
      proxy: "localhost/webpack-tailwindcss-browser-sync-php-basic/src",
      files: ["src/**/*.js", "src/**/*.css", "src/**/*.php"],
    }),
  ],
  devServer: {
    // * 代理(使用已經存在server eg apache or iis)
    proxy: {
      "/": "http://localhost/webpack-basic/src", // ! 所有請求都指定到http://localhost/webpack-basic/src 這個地址上
    },
    // * 指定 DevServer 所服務的文件的路徑。在本例中，指定為 dist 文件夾，當訪問 DevServer 時，會把該文件夾中的內容返回給瀏覽器。可以指定為一個物件
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true, // * 是否自動打開瀏覽器
    hot: true, // * 啟用模塊熱替換功能，這樣當模塊改變時，只會重新編譯改變的模塊，而不是重新編譯整個應用。
    compress: true, // * 啟用 gzip 壓縮。
    // watchFiles: ["src/**/*.php"], // * 监听的 PHP 文件目录
  },
}
