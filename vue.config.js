let webpack = require('webpack')
let devConfig = require('./config/devConfig')
let codeEnv = process.env.BUILD_ENV || 'development'
const publicPath = codeEnv==="development"?'':"/micro-fe"
module.exports = {
    publicPath:publicPath,
    configureWebpack: config => {
        // 环境变量赋值
        config.plugins.push(new webpack.DefinePlugin({
            'CODE_EVN': JSON.stringify(codeEnv),    // 当前环境变量(production, preview, development)
            'PROJECT_TITLE': JSON.stringify(devConfig.title),   // 当前项目名称
            'PROJECT_NAME': JSON.stringify(devConfig.project[codeEnv].toString()),
            'ROOT':JSON.stringify(publicPath)
        }))
    },
    devServer: {
        port: devConfig.port
    }
}
