import ApiInfo from './ApiInfo.js';

class QuKanMenuApiInfo extends ApiInfo {
    constructor ({
        path,
        type = 'get',
        timeout = 5000,
        headers,
        project = 'menu', // || qukan,
        author = '唐赟杰'
    }) {
        super({
            path,
            type,
            timeout,
            headers,
            project,
            author
        });
    }
}

export default {
    Menu: {
        list: new QuKanMenuApiInfo({
            path: '/configure-rule',
            type: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            author: '唐赟杰'
        }),
        set ({ configureId }) {
            return new QuKanMenuApiInfo({
                path: `/configure/${configureId}`,
                type: 'post',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
};
