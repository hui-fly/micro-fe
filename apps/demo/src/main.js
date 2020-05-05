import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routerMap from './router';
import store from './store';
import singleSpaVue from 'single-spa-vue';
import util from '@/common/js/util';
import mapi from '@/assets/js/mock';
console.log(123);
Vue.use(ElementUI);
Vue.use(Router);
const router = new Router(routerMap);
Vue.config.productionTip = false;
Vue.mixin({
    created () {
        this.$mapi = mapi;
        this.$util = util;
    }
});
if (BUILD_HOT) {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
}

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        router,
        store,
        render: h => h(App),
        el: '#MICRO-APP'
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
