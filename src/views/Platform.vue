<template>
    <div class="frame-container">
        <iframe :src="url" frameborder="0" ref="iframe"></iframe>
    </div>
</template>

<script>
import util from '@/common/js/util';
export default {
    data () {
        return {};
    },
    computed: {
        url () {
            const platformList = util.getCache('platformList');
            const platformInfo = platformList[this.$route.params.key];
            if (platformInfo && platformInfo.url) {
                return platformInfo.url;
            }
            return '';
        }
    }
};
</script>

<style lang="less" scoped>
.frame-container {
    width: 100%;
    height: 100%;
    & > iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
