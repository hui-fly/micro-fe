export default {
    test: {
        id: 1,
        parent: {
            id: 1,
            name: 'test管理'
        },
        name: 'test模块',
        path: 'http://10.104.32.104:3001/app.js',
        permission: '/testPerm',
        router: '/test'
    },
    demo: {
        id: 0,
        parent: {
            id: 3,
            name: 'demo管理'
        },
        name: 'demo模块',
        path: 'https://hui-fly.github.io/micro-module-demo/js/app.js',
        permission: '/demoPerm',
        router: '/demo'
    }
};
