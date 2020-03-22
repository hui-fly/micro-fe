<template>
    <div id="MICRO-APP"></div>
</template>
<script>
/* eslint-disable */
import util from '@/common/js/util';
import { registerApplication, start, getAppNames, getAppStatus, unloadApplication } from 'single-spa';
// 业务接入
const businessList = util.getCache('businessList');
// 绑定获取根路径方法
window.getPublicPath = name => {
    if (businessList[name] && businessList[name].path) {
        const business = businessList[name];
        const url = business.path;
        let index = url.lastIndexOf('/js');
        if (index < 0) {
            index = url.lastIndexOf('/');
        }
        return url.slice(0, index + 1);
    } else {
        throw Error(`Could not find url for module '${name}'`);
    }
};
window.BASE_ROUTE = `/${PROJECT_NAME}`;

export default {
    data() {
        return {};
    },
    methods: {
        registry(key, business) {
            const businessModulePath = business.path;
            // 植入渲染入口
            if (!this.createDomEntry('#MICRO-APP', key)) {
                console.error('创建渲染入口失败: ' + key);
                throw new Error('createDomEntry failed');
            }
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
                        return window.System.import(businessModulePath).then(res => {
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
                    if (location.pathname.match(window.BASE_ROUTE + business.router)) {
                        document.getElementById(key).style.display = 'block';
                        return true;
                    } else {
                        let el = document.getElementById(key);
                        if (el) {
                            document.getElementById(key).style.display = 'none';
                        }
                        return false;
                    }
                    // return location.pathname.match(window.BASE_ROUTE + business.router)
                },
                {
                    domElement: `#${key}`
                }
            );
        },
        // 注册模块
        async registerApp() {
            for (const key in businessList) {
                if (businessList.hasOwnProperty(key)) {
                    const business = businessList[key];
                    this.registry(key, business);
                }
            }
        },
        createDomEntry(rootEl, id) {
            let root = document.querySelector(rootEl);
            // 存根
            if (!root) {
                root = document.body;
                return false;
            }
            const entryEl = document.createElement('div');
            entryEl.id = id;
            root.append(entryEl);
            return true;
        }
    },
    async mounted() {
        await start();
        await this.registerApp();
    }
};
</script>
<style lang="less" scoped>
#MICRO-APP {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>
