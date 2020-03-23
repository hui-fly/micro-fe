import global from './global';
import Login from '@/views/Login';
import Home from '@/views/Home';
import NotFound from '@/views/404';

let isHistoryApi = !!(window.history && history.pushState);

export default {
    mode: isHistoryApi ? 'history' : 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                label: '登录',
                hidden: true
            }
        },
        {
            path: '/',
            component: Home,
            meta: {
                label: '首页',
                hidden: true
            }
        },
        {
            path: '/404',
            component: NotFound,
            meta: {
                label: '404',
                hidden: true
            }
        },
        global,
        {
            path: '*',
            redirect: '/404',
            meta: {
                hidden: true
            }
        }
    ]
};
