/* eslint-enable no-unused-vars */
import Vue from 'vue';
import NProgress from 'vue-nprogress';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import routerMap from './router/index';
import App from './App';
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

// 处理同路由跳转报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err);
};
// 绑定路由
const router = new Router(routerMap);

new Vue({
    router,
    nprogress,
    render: h => h(App)
}).$mount('#app');
