<!--
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-11-01 00:20:14
 -->
<template>
    <div class="md-footer">© {{ year }} {{ title }}</div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'footerNav',
    data () {
        return {
            title: PROJECT_TITLE,
            year: moment().format('YYYY')
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.md-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-weight: 500;
    background: #324057;
    font-size: 13px;
    text-align: center;
    z-index: 0;
}
</style>
