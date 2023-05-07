# Webpack Tailwindcss Broswer Sync PHP

## Install

`npm install web`

## Start

`npm run dev`
> 開發(webpack-server-dev)

`npm run dev Watch`
> webpack --watch 模式

`npm run build`

> build scripts


## implement Guidance

 1. `npm i -D webpack webpack-cli webpack-dev-server`
    - use wepback loaders
        * `npm i -D babel-loader @babel/core @babel/preset-env`
            >  (解決老瀏覽器支援最新語法的js syntax, 根據配置文件調整)
        * `npm i -D css-loader`
            > 解析css文件
        * `npm i -D style-loader`
            > 將css插入html中, 替代方案可以使用 mini-css-extract-plugin單獨打包一個css文件
        * `npm i -D postcss postcss-loader postcss-preset-env`
            > postcss (可根據js plugin轉換style), 總結的來說是解決瀏覽器支援最新語法css語法
    - use webpack plugin
        * `npm i -D mini-css-extract-plugin`
            > 將bundle.js裡的css抽離成單獨css文件
        * `browser-sync-webpack-plugin`
            > 根據相關文件改動實現瀏覽器自動刷新, 可自己定義配置
 2. `npm i -D tailwindcss` 
    * generate config file `npx tailwindcss init`
    * [tailwindcss document](https://tailwindcss.com/)
  