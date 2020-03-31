let webpack = require('webpack')
let devConfig = require('./config/devConfig')
let codeEnv = process.env.BUILD_ENV || 'development'
module.exports = {
    publicPath: codeEnv==="development"?'/':"/micro-fe",
    configureWebpack: config => {
        // 环境变量赋值
        config.plugins.push(new webpack.DefinePlugin({
            'CODE_EVN': JSON.stringify(codeEnv),    // 当前环境变量(production, preview, development)
            'PROJECT_TITLE': JSON.stringify(devConfig.title),   // 当前项目名称
            'PROJECT_NAME': JSON.stringify(devConfig.project[codeEnv].toString())
        }))
    },
    devServer: {
        port: devConfig.port
    }
}
