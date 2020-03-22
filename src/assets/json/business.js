export default {
    test: {
        id: 0,
        parent: {
            id: 3,
            name: '配置管理'
        },
        name: '用户配置',
        path: 'http://10.104.32.104:3000/app.js',
        permission: '/user',
        router: '/test'
    },
    'md-dd-ad-manage': {
        id: 1,
        parent: {
            id: 3,
            name: '配置管理'
        },
        name: '保险管理',
        path: 'http://qtt-fe-md-dd-ad-manage-qa.qttfe.com/js/app.js',
        permission: '/123',
        router: '/revenue-mg'
    }
};
