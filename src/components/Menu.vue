<!--
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-11-01 17:46:48
 -->
<template>
    <div class="md-menu">
        <el-menu
            :default-active="activeRoute"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-openeds="['route0', 'route1', 'route2', 'route3', '4']"
            :background-color="backgroundColor"
            text-color="#ffffff"
            active-text-color="#59abff"
            :router="true"
        >
            <el-submenu v-for="(item, index) in menu" :key="index" :index="'route' + index">
                <template slot="title">
                    <i :class="icon[index]" class="menu-title"></i>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item v-for="(child, i) in item.children" :index="child.url" :key="i">
                    {{ child.name }}{{child.url}}
                </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="menu-title el-icon-coin"></i>
                    <span>其他</span>
                </template>
                <el-menu-item v-for="(item, index) in platformMenu" :index="item.path" :key="index">{{
                    item.name
                }}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import setMenu from '@/common/js/set-menu.js';
export default {
    name: 'md-menu',
    props: ['show', 'isCollapse'],
    data () {
        return {
            icon: ['el-icon-setting', 'el-icon-user', 'el-icon-goods'],
            menu: [],
            platformMenu: []
        };
    },
    computed: {
        // 当前路由处理
        activeRoute () {
            let route = this.$route.path;
            for (let item of this.menu) {
                for (let child of item.children) {
                    if (child.url && this.$route.path.includes(child.url)) {
                        route = child.url;
                        break;
                    }
                }
                if (route !== this.$route.path) {
                    break;
                }
            }
            return route;
        }
    },
    methods: {},
    mounted () {
        setMenu.getApp().then(e => {
            this.menu = e;
        });
        setMenu.getPlatform().then(e => {
            this.platformMenu = e;
        });
    }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
}
.el-menu-vertical-demo {
    height: 100%;
}
.menu-title {
    color: #ffffff;
    font-size: 28px;
    line-height: 28px;
    margin-right: 11px;
}
</style>
