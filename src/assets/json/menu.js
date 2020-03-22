import businessList from './business';
import platformList from './platform';
import Api from '@/core/Apis/';
import QuRequest from '@/core/QuRequest';
const quRequest = new QuRequest();

// 通过文件获取
const getListByFile = type => {
    let list = {};
    switch (type) {
    case 'platform':
        list = platformList;
        break;
    case 'business':
        list = businessList;
        break;
    }
    return list;
};

// 通过配置接口获取内部模块
const getMenuList = async type => {
    const res = await quRequest.send(Api.Menu.Menu.list, {
        facts: {
            name: type,
            env: quRequest.isProduct()
        },
        groupId: 22
    });
    // 本地调试
    // eslint-disable-next-line no-undef
    if (DEV_EVN === 'local') {
        return getListByFile(type);
    }
    if (!res.code && res.response) {
        return JSON.parse(res.response);
    } else {
        return getListByFile(type);
    }
};

export default {
    getBusinessList: async () => getMenuList('business'),
    getPlatformList: async () => getMenuList('platform'),
    getOwner: async () => getMenuList('owner')
};
