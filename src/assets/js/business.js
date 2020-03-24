export default {
    test: {
        id: 1,
        parent: {
            id: 1,
            name: 'XX管理'
        },
        name: '保险管理',
        path: 'http://10.104.32.104:3001/app.js',
        permission: '/123',
        router: '/test'
    },
    demo: {
        id: 0,
        parent: {
            id: 3,
            name: '配置管理'
        },
        name: '用户配置',
        path: 'http://10.104.32.104:3000/app.js',
        permission: '/user',
        router: '/demo'
    },
};
