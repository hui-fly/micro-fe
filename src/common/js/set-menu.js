/*
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-11-01 18:59:57
 */
import util from '@/common/js/util';

function sortByIdPid(arr) {
    function cmp(a, b) {
        return a.parent.id - b.parent.id;
    }
    try {
        arr.sort((a, b) => b.id - a.id).sort(cmp);
        return arr;
    } catch (e) {
        util.cleanCache();
        window.location.reload();
    }
}
async function getAppMenu(pure) {
    const dict = Object.keys(pure);
    const getIndexArr = function () {
        let nodes = [];
        // 首页配置和模块进去的配置是两套
        for (let key of dict) {
            const node = pure[key];
            // 首页菜单默认显示有权限状态
            nodes.push(node);
        }
        // sort
        return sortByIdPid(nodes);
    };
    const arr = getIndexArr();
    return getTree(arr);
}
function getTree(arr) {
    let midObj = {};
    let midArr = [];
    // 从后向前遍历
    for (let i = arr.length - 1; i >= 0; i--) {
        let nowPid = arr[i].parent.id;
        // 建立当前节点的父节点的children 数组
        if (midObj[nowPid]) {
            midObj[nowPid].children.push(arr[i]);
        } else {
            midObj[nowPid] = [];
            midObj[nowPid] = {
                id: nowPid,
                name: arr[i].parent.name,
                children: []
            };
            midObj[nowPid].children.push(arr[i]);
        }
    }
    Object.keys(midObj).forEach(key => {
        midArr.push(midObj[key]);
    });
    return midArr;
}
export default {
    async getApp() {
        let appList = util.getCache('appList');
        let curMenu = [];
        curMenu = getAppMenu(appList);
        return curMenu;
    },
    async getPlatform() {
        let platformList = util.getCache('platformList');
        let list = [];
        for (const key in platformList) {
            if (platformList.hasOwnProperty(key)) {
                const platform = platformList[key];
                list.push({
                    ...platform,
                    router: `/platform${platform.router}`
                });
            }
        }
        return list;
    }
};
