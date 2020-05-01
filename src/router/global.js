import Home from '@/views/Home';
import Portal from '@/views/Portal';
import Platform from '@/views/Platform';

export default [
    {
        path: `/`,
        component: Home,
        children: [
            {
                name: 'Platform', // iframe
                path: '/platform/:key',
                component: Platform
            },
            {
                name: 'Portal', // 带*的要放在后边
                path: `/*`,
                component: Portal // 加载模块
            }
        ]
    }
];
