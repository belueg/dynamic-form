module.exports = {
  publicPath: '/dynamic-form',
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
