import businessList from './business';
import platformList from './platform';

const getMenuList = type => {
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

export default {
    getBusinessList: async () => getMenuList('business'),
    getPlatformList: async () => getMenuList('platform')
};
