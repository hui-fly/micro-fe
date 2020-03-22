<!--
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-11-01 19:02:43
 -->
<template>
    <div class="container">
        <!-- 侧栏 -->
        <div style="background-color: #324057;" class="aside" :class="{ 'mini-menu': isCollapse }">
            <div class="logo-content" @click="goHome">
                <div class="logo-icon"></div>
                <transition name="el-fade-in">
                    <div class="logo" v-show="!isCollapse">
                        <div class="api-branch" v-if="!isProduct && apiBranch.length > 0">
                            {{ `${devENV !== 'prd' ? devENV : ''}` }}
                        </div>
                        <div>{{ title }}</div>
                    </div>
                </transition>
            </div>
            <md-menu class="menu-box" :isCollapse.sync="isCollapse"></md-menu>
        </div>

        <section class="right-content">
            <!--头部内容-->

            <head-nav @isCollapseMenu="collapse" />
            <!-- 内容区域 -->
            <div class="main">
                <!--主内容-->
                <div v-if="$route.path === '/'" class="welcome">
                    欢迎
                </div>
                <section v-else class="content-container">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </section>
            </div>
        </section>
        <footer-nav />
    </div>
</template>

<script>
import HeadNav from '@/components/HeadNav';
import Menu from '@/components/Menu';
import FooterNav from '@/components/FooterNav';
import QuRequest from '../core/QuRequest';
const quRequest = new QuRequest();

export default {
    data () {
        return {
            isCollapse: false,
            title: quRequest.getProjectTitle(),
            isProduct: quRequest.isProduct(),
            /* eslint-disable no-undef */
            apiBranch: CODE_EVN,
            devENV: DEV_EVN,
            /* eslint-enable no-undef */
            menu: []
        };
    },
    computed: {},
    methods: {
        collapse (val) {
            if (typeof val === 'undefined') {
                this.isCollapse = !this.isCollapse;
            } else {
                this.isCollapse = val;
            }
        },
        goHome () {
            this.$router.push('/');
        }
    },
    components: {
        HeadNav,
        MdMenu: Menu,
        FooterNav
    },
    created () {},
    mounted () {}
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    background: #ffffff;
    @keyframes maxsize {
        from {
            width: 64px;
        }
        to {
            width: 240px;
        }
    }
    .aside {
        width: 240px;
        background-color: rgb(50, 64, 87);
        overflow: auto;
        box-sizing: border-box;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-box-sizing: border-box;
        animation: maxsize 0.4s 1 ease-in;
        .logo-content {
            position: relative;
            height: 52px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
    }
    @keyframes minisize {
        from {
            width: 240px;
        }
        to {
            width: 64px;
        }
    }
    .mini-menu {
        width: 64px;
        animation: minisize 0.2s 1 linear;
    }
    .logo {
        font-size: 22px;
        color: #fff;
        font-weight: 500;
        display: inline-block;
        padding: 0px 20px;
        line-height: 24px;
        width: 100px;
        height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .logo-icon {
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-left: 18px;
        background: url('~@/assets/img/logo.png') no-repeat left top;
    }
    .api-branch {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 16px;
        padding: 0 2px;
        text-align: center;
        background-color: red;
        font-size: 14px;
        color: #fff;
    }

    .right-content {
        -ms-flex-direction: column;
        flex-direction: column;
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        box-sizing: border-box;
        min-width: 0;
    }

    .main {
        position: relative;
        overflow: hidden;
        z-index: 0;
        width: 100%;
        height: 100vh;
        display: block;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        .el-menu {
            height: 100%;
            overflow-y: auto;
        }
        .bread {
            padding-left: 10px;
            padding-top: 3px;
            padding-bottom: 2px;
            font-size: 0.8rem;
        }
        .content-container {
            height: calc(100% - 26px);
            &.model::before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.45);
                z-index: 90;
            }
            .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
}
</style>
