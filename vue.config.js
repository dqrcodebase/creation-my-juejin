'use strict'
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const port = process.env.port || process.env.npm_config_port || 6013 // dev port

module.exports = {
  devServer: {
    port: port
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('layout', resolve('./src/layout'))
      .set('style', resolve('./src/assets/style'))
      .set('imgs', resolve('./src/assets/imgs'))

  }
}