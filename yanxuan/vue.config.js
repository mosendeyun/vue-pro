const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:8888',
                changeOrigin:true

            },
            '/topic': {
                target: 'http://m.you.163.com',
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('@pages', resolve('src/pages'))
      }
}