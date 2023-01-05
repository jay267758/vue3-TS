const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const ElementPlus = require("unplugin-element-plus/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: process.env.NODE_ENV === 'production' ? 'static/' : '',
  crossorigin: 'anonymous',

  devServer: {
    // before: require('./mock/index'),
    // 是否自动打开浏览器.
    open: false,
    proxy: {
      'api/v1/*': {
        // target: 'https://mock.mengxuegu.com',
        target: 'http://127.0.0.1:8080/',
        // target: 'http://localhost:8080',
        changeOrigin: true, // 是否跨域
        // pathRewrite(path) { // 加前缀
        //   return `/mock/63993da12e0f396e51a5c723/nba${path}`;
        // }
      }
    }
  },

  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
  
  configureWebpack: {
    plugins: [ // 按需引入UI组件 
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // ElementPlus({
      //   useSource: true,
      // }),
    ],
  }
})
