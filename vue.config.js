const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '127.0.0.1',  
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3000',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/server': ''
    //     }
    //   },
    //   '/dev': {
    //     target: 'http://127.0.0.1:5000',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/dev': ''
    //     }
    //   },
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('components', resolve('src/components'));
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/timg.png'
        },
        mac: {
          icon: './public/timg.png'
        },
        productName: '变配电运行环境智能监控',
      }
    }
  }
};