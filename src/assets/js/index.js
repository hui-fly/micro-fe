import appList from './appList';
import platformList from './platform';

const getMenuList = type => {
    let list = {};
    switch (type) {
    case 'platform':
        list = platformList;
        break;
    case 'app':
        list = appList;
        break;
    }
    return list;
};

export default {
    getAppList: async () => getMenuList('app'),
    getPlatformList: async () => getMenuList('platform')
};
