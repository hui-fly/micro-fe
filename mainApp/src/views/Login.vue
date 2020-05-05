<template>
    <div class="login-form">
        <el-card>
            <el-form :data="userInfo">
                <el-form-item label="用户名">
                    <el-input v-model="userInfo.name"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="login">登录</el-button>
        </el-card>
    </div>
</template>

<script>
import util from '@/common/js/util.js';
export default {
    data () {
        return {
            userInfo: {}
        };
    },
    methods: {
        login () {
            util.setCache('userInfo', this.userInfo);
            this.$router.push('/');
        }
    },
    mounted () {}
};
</script>
<style lang="less">
.login-box {
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.125);
    .ibox-content {
        min-height: 524px;
    }
    .qrcode-wrap,
    .password-wrap {
        margin-top: 20px;
    }
    .redirect-text {
        text-align: center;
        padding: 10px;
    }

    .el-tabs__nav {
        width: 100%;

        .el-tabs__item {
            width: 33.333%;
        }
    }
}
</style>
