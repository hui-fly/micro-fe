<!--
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-10-31 23:38:31
 -->
<template>
    <div id="app">
        <nprogress-container></nprogress-container>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer';

export default {
    name: 'app',
    components: {
        NprogressContainer
    }
};
</script>

<style lang="less">
.nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: 2048;
    pointer-events: none;
    display: inherit;

    #nprogress {
        @color: #004c32;
        .bar {
            background: @color;
        }
        .peg {
            box-shadow: 0 0 10px @color, 0 0 5px @color;
        }

        .spinner-icon {
            border-top-color: @color;
            border-left-color: @color;
        }
    }
}

html,
body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
}

#app {
    width: 100%;
    height: 100%;
}

.el-submenu [class^='fa'] {
    vertical-align: baseline;
    margin-right: 10px;
}

.el-menu-item [class^='fa'] {
    vertical-align: baseline;
    margin-right: 10px;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    //border:1px solid #dfe6ec;
    margin: 10px 0px;
    .el-form-item {
        margin-bottom: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
