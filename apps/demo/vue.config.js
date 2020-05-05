let webpack = require('webpack')
let apiConfig = require('./config/apiConfig')
let codeEnv = process.env.BUILD_ENV || 'development'
const buildHot = process.env.BUILD_HOT || false;

const { CI_COMMIT_REF_NAME: branch } = process.env;
let appEnv = 'qa';
if (branch) {
    if (branch === 'master') {
        appEnv = 'prd';
    } else if (branch === 'preview') {
        appEnv = 'pre';
    }
}

module.exports = {
    lintOnSave: false,
    filenameHashing: !buildHot ? false : true,
    configureWebpack: config => {
        // 环境变量赋值
        if (apiConfig[codeEnv]) {
            config.plugins.push(new webpack.DefinePlugin({
                'CODE_EVN': JSON.stringify(codeEnv), // 当前环境变量(production, preview, development)
                'BUILD_HOT': !!buildHot, // 是否热服务
                'DOMAIN_API': JSON.stringify(apiConfig[codeEnv]), // 当前接口域名
                'PROJECT_TITLE': JSON.stringify(apiConfig.title), // 当前项目名称
                'PROJECT_NAME': JSON.stringify(apiConfig.project) // 当前鉴权project
            }))
        }
    },
    chainWebpack: config => {
        // 定义环境变量
        config.plugin('define').tap(([opts]) => {
            opts['process.env'].APP_ENV = JSON.stringify(appEnv);
            return [opts];
        });
        if (!buildHot) {
            config.devServer.set('inline', false);
            config.devServer.set('hot', false);
            config.externals(['vue', 'vue-router']);
        }
    }
}
// 在主项目中嵌入和单独部署需要运行不同的命令，分别是start和dev