export default {
    test: {
        id: 1,
        parent: {
            id: 3,
            name: 'demo管理'
        },
        name: 'test模块',
        path: 'https://hui-fly.github.io/micro-module-demo/js/app.js',
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
