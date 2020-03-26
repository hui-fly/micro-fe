import Home from '@/views/Home';
import Portal from '@/views/Portal';
import Platform from '@/views/Platform';

export default [
    {
        path: '/',
        redirect: `/${PROJECT_NAME}`,
        component: Home,
        children: [
            {
                name: 'Portal',
                path: `/${PROJECT_NAME}*`,
                component: Portal, // 加载模块
            },
            {
                name:'Platform',
                path: 'platform/:key',
                component: Platform,
            }
        ]
    }
]
