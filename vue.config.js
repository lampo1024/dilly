module.exports = {
    //publicPath: process.env.NODE_ENV === 'production' ? '/datum' : '',
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        // proxy: 'localhost:3000'
        port: 5300,
        //禁用host检查,不然在部分流利器中会报[WDS disconnected]的错误
        // 参考:https://github.com/webpack/webpack-dev-server/issues/851
        disableHostCheck: true
    }
}