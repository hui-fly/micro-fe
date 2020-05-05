/* eslint-disable */
import util from '@/common/js/util';
import { registerApplication, start, getAppNames, getAppStatus, unloadApplication } from 'single-spa';
// 业务接入
window.BASE_ROUTE = `/${PROJECT_NAME}`; //子模块路由base
function registry(key, app) {
    // 去重
    if (getAppNames().includes(key)) {
        return;
    }
    // registerApplication 用于注册我们的子项目，第一个参数为项目名称（唯一即可），第二个参数为项目地址，第三个参数为匹配的路由，第四参数为初始化传值。
    registerApplication(
        key,
        () => {
            const render = () => {
                // 渲染
                return window.System.import(app.path).then(res => {
                    if (res) {
                        return res;
                    } else {
                        return render();
                    }
                });
            };
            return render();
        },
        location => {
            if (location.pathname.indexOf(app.router) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    );
}
// 注册模块
function registerApp() {
    start()
    const appList = util.getCache('appList');
    for (const key in appList) {
        if (appList.hasOwnProperty(key)) {
            const app = appList[key];
            registry(key, app);
        }
    }
}
export default registerApp