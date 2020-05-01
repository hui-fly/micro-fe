import Home from '@/views/Home';
import Portal from '@/views/Portal';
import Platform from '@/views/Platform';

export default [
    {
        path: `/`,
        component: Home,
        children: [
            {
                name: 'Portal',
                path: `/*`,
                component: Portal // 加载模块
            },
            {
                name: 'Platform',
                path: 'platform/:key',
                component: Platform
            }
        ]
    }
];
