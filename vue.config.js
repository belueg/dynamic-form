module.exports = {
  publicPath: '/calculadora',
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/sass/_main.scss"; `
      }
    }
  }
}
