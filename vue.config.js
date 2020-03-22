let webpack = require('webpack')
let apiConfig = require('./config/apiConfig')
let codeEnv = process.env.BUILD_ENV || 'development'
let devEnv = process.env.DEV_EVN || 'online'

module.exports = {
    configureWebpack: config => {
        // 环境变量赋值
        if (apiConfig[codeEnv]) {
            config.plugins.push(new webpack.DefinePlugin({
                'DEV_EVN': JSON.stringify(devEnv),
                'CODE_EVN': JSON.stringify(codeEnv),    // 当前环境变量(production, preview, development)
                'DOMAIN_API': JSON.stringify(apiConfig[codeEnv]),   // 当前接口域名
                'PROJECT_TITLE': JSON.stringify(apiConfig.title),   // 当前项目名称
                'PROJECT_NAME': JSON.stringify(apiConfig.project[codeEnv]),   // 当前鉴权project
            }))
        }
    },
    devServer: {
        port: apiConfig.port
    }
}
