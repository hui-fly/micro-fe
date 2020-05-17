<template>
    <div id="demo">
        <transition name="fade" mode="out-in">
            hhh
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="less">
html,
body {
    margin: 0px;
    padding: 0px;
    height: 100%;
}
.el-main {
    padding: 0;
    overflow: hidden;
}

#demo {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    overflow: auto;
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
