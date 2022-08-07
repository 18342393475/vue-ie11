// vue.config.js
const path = require('path')// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = {
    transpileDependencies: ['sockjs-client'],
    configureWebpack: () => {
    },
    chainWebpack: (config) => {
        // 给路径起别名
        config.resolve.alias
          .set('@', resolve('./src'))
          .set('@c', resolve('src/components'))
          .set('@v', resolve('src/views'))
          .set('@a', resolve('src/assets'))
    }
}