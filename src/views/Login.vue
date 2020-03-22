<template>
    <div class="content has-text-centered"></div>
</template>

<script>
import ewxLoginSDK from '@qtt/ewx-login-sdk';
import QuRequest from '../core/QuRequest';
const quRequest = new QuRequest();
export default {
    beforeRouteEnter (to, from, next) {
        const login = () => {
            // the project author
            const copyright = {
                guardian: '唐赟杰',
                team: {
                    name: 'FE',
                    link: 'http://km.qutoutiao.net/pages/viewpage.action?pageId=49189809'
                },
                feedback: 'http://km.qutoutiao.net/pages/viewpage.action?pageId=49189809'
            };
            ewxLoginSDK.login({
                project: quRequest.getProject(),
                url: location.href,
                qa: !quRequest.isProduct(),
                copyright: JSON.stringify(copyright)
            });
        };
        ewxLoginSDK.getUserInfo({ isPerm: true }).then(
            res => {
                if (!res) {
                    login();
                } else {
                    location.href = '/';
                }
            },
            rej => {
                login();
            }
        );
    }
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
