import List from '../views/List.vue';
export default {
    // mode: 'history',
    // base: window.BASE_ROUTE || '/',
    routes: [
        {
            path: '/demo', // 这个path与主项目中配置的router一致
            redirect: '/demo/list',
            component: List
        },
        {
            path: '/demo/list',
            component: List,
            name: 'List'
        },
        {
            path: '/test', // 这个path与主项目中配置的router一致
            redirect: '/test/list',
            component: List
        },
        {
            path: '/test/list',
            component: List,
            name: 'List'
        }
    ]
};
