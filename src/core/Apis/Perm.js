import ApiInfo from './ApiInfo.js';

class QuKanPermApiInfo extends ApiInfo {
    constructor ({
        path,
        type = 'get',
        timeout = 5000,
        headers,
        project = 'self', // || qukan,
        author = 'PIEE'
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
    member: {
        checkPerm: new QuKanPermApiInfo({
            path: '/member/checkPerm',
            type: 'post'
        })
    },
    perm: {
        list: new QuKanPermApiInfo({
            path: '/perm/getPermGroupList',
            type: 'post'
        })
    },
    admin: {
        skillPackageList: new QuKanPermApiInfo({
            path: '/admin/skillpackage/getList',
            type: 'post'
        }),
        skillPackageAdd: new QuKanPermApiInfo({
            path: '/admin/skillpackage/add',
            type: 'post'
        }),
        skillAdd: new QuKanPermApiInfo({
            path: '/admin/skill/add',
            type: 'post'
        })
    }
};
