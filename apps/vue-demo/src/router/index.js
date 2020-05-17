import List from '../views/List.vue';
export default {
    // mode: 'history',
    // base: window.BASE_ROUTE || '/',
    routes: [
        {
            path: '/react', // 这个path与主项目中配置的router一致
            redirect: '/react/list',
            component: List
        },
        {
            path: '/react/list',
            component: List,
            name: 'List'
        },
        {
            path: '/vue', // 这个path与主项目中配置的router一致
            redirect: '/vue/list',
            component: List
        },
        {
            path: '/vue/list',
            component: List,
            name: 'List'
        }
    ]
};
