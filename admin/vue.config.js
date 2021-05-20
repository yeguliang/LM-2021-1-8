
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath:'./',
  productionSourceMap:false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'server': '@/server',
        'store' : '@/store',
        'utils' : '@/utils',
        'views': '@/views',
        'router': '@/router'
      }
    }
  }
}





