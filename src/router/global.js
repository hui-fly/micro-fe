import Home from '@/views/Home';
import GlobalNavigation from '@/views/global/GlobalNavigation';
import Platform from '@/views/global/Platform';

export default {
    path: '/',
    meta: {
        icon: 'el-icon-s-grid',
        label: '公共模块',
        hidden: true
    },
    component: Home,
    children: [
        {
            name: 'GlobalNavigation',
            path: `${PROJECT_NAME}*`,
            component: GlobalNavigation, // 加载模块
            meta: {
                label: '平台',
                hidden: true,
                api: []
            }
        },
        {
            path: 'platform/:key',
            component: Platform,
            meta: {
                label: '平台',
                hidden: false
            }
        }
    ]
};
