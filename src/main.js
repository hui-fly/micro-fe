import Vue from 'vue';
import NProgress from 'vue-nprogress';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import routerMap from './router/index';
import App from './App';
import moduleConfig from '@/assets/js/index.js';
import util from '@/common/js/util';
const eventBus = {
    install (Vue, options) {
        const vue = new Vue();
        Vue.prototype.$bus = vue;
    }
};
Vue.use(eventBus);
Vue.use(ElementUI);
Vue.use(Router);
Vue.use(NProgress);

const nprogress = new NProgress({
    parent: '.nprogress-container'
});
Vue.mixin({
    created: () => {
        Vue.prototype.backgroundColor = '#456';
    }
});
// 绑定路由
const router = new Router(routerMap);

// 获取子项目的配置

Promise.all([moduleConfig.getAppList(), moduleConfig.getPlatformList()])
    .then(res => {
        util.setCache('appList', res[0]);
        util.setCache('platformList', res[1]);                        
        new Vue({
            router,
            nprogress,
            render: h => h(App)
        }).$mount('#app'); 
    })
    .catch(e => {
        console.log(e, '获取配置失败');
    });
