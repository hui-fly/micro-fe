module.exports = {
    project: {
        "development":"119_qa",
        "production":"119_prd"
    }, // 项目鉴权project
    title: '119统一管理平台', // 项目名称
    port: 5010, // 启动端口
    production: { // 生产环境
        qukan: { // 接口1project
            'default': 'http://api.1sapp.com/' // 默认分支
        },
        perm: { // 接口2project
            'default': 'https://api-perm.1sapp.com/'
        },
        self: { // 接口2project
            'default': 'https://api-perm.1sapp.com/'
        },
        menu: {
            'default': 'http://rd-fe-configure-server.qutoutiao.net/'
        }
    },
    preview: { // 预发布环境
        qukan: {
            'default': 'http://pre.api.1sapp.com/'
        },
        perm: {
            'default': 'https://api-perm.1sapp.com/'
        },
        self: {
            'default': 'https://api-perm.1sapp.com/'
        },
        menu: {
            'default': 'http://rd-fe-configure-server.qutoutiao.net/'
        }
    },
    development: { // 测试环境
        qukan: {
            'default': 'http://test-api.qukan.qttcs3.cn/',
            '1': 'http://test1-api.qukan.qttcs3.cn/' // 测试分支1
        },
        perm: {
            'default': 'http://test-api.qukan.perm.qttcs3.cn/'
        },
        self: {
            'default': 'http://test-api.qukan.perm.qttcs3.cn/'
        },
        menu: {
            'default': 'http://rd-fe-configure-server.qutoutiao.net/'
        }
    }
}
