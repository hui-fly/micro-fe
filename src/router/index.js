import Login from '@/views/Login';
import NotFound from '@/views/404';
import global from './global'
// import Home from '@/views/Home';

let isHistoryApi = !!(window.history && history.pushState);

export default {
    mode: isHistoryApi ? 'history' : 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        ...global,
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404',
        }
    ]
};
