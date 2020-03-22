<template>
    <div class="frame_wrapper">
        <iframe :src="url" frameborder="0" ref="iframe"></iframe>
    </div>
</template>

<script>
import util from '@/common/js/util';
const platformList = util.getCache('platformList');
console.log(platformList);
export default {
    data () {
        return {
            // url: ""
        };
    },
    computed: {
        url () {
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
.frame_wrapper {
    width: 100%;
    height: 100%;
    & > iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
