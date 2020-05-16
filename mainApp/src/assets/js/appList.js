export default {
    vue: {
        id: 1,
        parent: {
            id: 3,
            name: 'demo管理'
        },
        name: 'vue模块',
        path: 'https://hui-fly.github.io/micro-module-demo/js/app.js',
        // path:'http://10.104.32.104:3000/app.js',
        permission: '/testPerm',
        router: '/vue'
    },
    react: {
        id: 0,
        parent: {
            id: 3,
            name: 'react管理'
        },
        name: 'react模块',
        path:'http://10.104.32.104:3001/js/app.js',
        permission: '/demoPerm',
        router: '/react'
    }
};
