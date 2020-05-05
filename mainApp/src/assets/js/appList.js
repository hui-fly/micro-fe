export default {
    test: {
        id: 1,
        parent: {
            id: 3,
            name: 'demo管理'
        },
        name: 'vue模块',
        path: 'https://hui-fly.github.io/micro-module-demo/js/app.js',
        permission: '/testPerm',
        router: '/vue'
    },
    demo: {
        id: 0,
        parent: {
            id: 3,
            name: 'demo管理'
        },
        name: 'react模块',
        path: 'https://hui-fly.github.io/micro-react-demo/js/app.js',
        permission: '/demoPerm',
        router: '/react'
    }
};
