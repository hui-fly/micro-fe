<template>
    <div id="MICRO-APP"></div>
</template>
<script>
/* eslint-disable */
import util from '@/common/js/util';
import { registerApplication, start, getAppNames, getAppStatus, unloadApplication } from 'single-spa';
// 业务接入
const businessList = util.getCache('businessList');

window.BASE_ROUTE = `/${PROJECT_NAME}`;   //子模块路由base

export default {
    data() {
        return {};
    },
    methods: {
        registry(key, business) {
            const businessModulePath = business.path;
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
                    if (location.pathname.match(`/${PROJECT_NAME}` + business.router)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                {
                    domElement: `#MICRO-APP`
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
