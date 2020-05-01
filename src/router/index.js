import Login from '@/views/Login';
import NotFound from '@/views/404';
import global from './global';

let isHistoryApi = !!(window.history && history.pushState);
export default {
    linkActiveClass: 'is-active', // 链接激活时的类名
    scrollBehavior: () => ({ y: 0 }), // 滚动到哪个位置
    // base: ROOT,   // base只在history模式下生效
    routes: [
        ...global,
        {
            path: '/login',
            component: Login
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
};
