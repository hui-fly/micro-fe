<!--
 * @Date: 2019-10-30 10:06:47
 * @LastEditTime: 2019-11-01 14:09:14
 -->
<template>
    <div class="header" :style="{ background: backgroundColor }">
        <div class="header-left">
            <i class="el-icon-s-unfold" @click="isCollapseMenu(false)" v-show="isCollapse" />
            <i class="el-icon-s-fold" @click="isCollapseMenu(true)" v-show="!isCollapse" />
        </div>
        <div class="header-right">
            <!-- 用户信息 -->
            <div class="userinfo">
                <!-- 用户头像 -->
                <el-dropdown class="user-info" v-if="info.name" @command="goto">
                    <span class="nickname">
                        {{ info.name }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="fullScreen">
                            <i class="el-icon-full-screen"></i>
                            全屏
                        </el-dropdown-item>
                        <el-dropdown-item command="logout">
                            <i class="el-icon-switch-button"></i>
                            退出
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <!-- 清除缓存 -->
            <div class="clear-btn" @click="clearLS">清除缓存</div>
        </div>
    </div>
</template>

<script>
import util from '@/common/js/util';
export default {
    data () {
        return {
            fullscreen: false,
            info: {},
            // appList: util.getCache('appList').list,
            appAlertFlag: false,
            selectFouce: false,
            isCollapse: false,
            title: PROJECT_TITLE
        };
    },
    computed: {},
    methods: {
        isCollapseMenu (val) {
            this.isCollapse = val;
            this.$emit('isCollapseMenu', val);
        },
        async getMemberInfo () {
            try {
                this.info = util.getCache('userInfo') || {};
            } catch (err) {
                this.$message.error(`${err.message || '未知错误'}`);
            }
            this.loading = false;
        },
        // 用户信息跳转
        goto (command) {
            if (command === 'logout') {
                this.logout();
            }
            if (command === 'fullScreen') {
                this.handleFullScreen();
            }
        },
        logout () {
            util.setCache('useInfo', '');
            this.$router.push('/login');
        },
        // 全屏事件
        handleFullScreen () {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        clearLS () {
            this.$confirm('清除缓存后将刷新页面，确定继续吗？', '', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    util.cleanCache();
                    window.location.reload();
                })
                .catch(() => {});
        }
    }
};
</script>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 50px;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
    z-index: 1;
    .header-left {
        display: flex;
        font-size: 30px;
        cursor: pointer;
    }
    .header-right {
        display: flex;
    }
    .logo-content {
        position: relative;
        height: 52px;
        display: flex;
        align-items: center;
    }
    .logo {
        font-size: 22px;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        display: inline-block;
        position: relative;
        line-height: 24px;
        padding: 12px;
        margin-left: 20px;
    }
    .api-branch {
        position: absolute;
        top: 0;
        right: 8px;
        line-height: 15px;
        padding: 0 5px;
        text-align: center;
        background-color: red;
        font-size: 14px;
        color: #fff;
    }
    .select-line {
        display: flex;
        align-items: center;
        position: relative;
        width: 173px;
        cursor: pointer;
        .select-input {
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: 12px;
            height: 28px;
            line-height: 28px;
            outline: 0;
            padding: 0 30px 0 15px;
            width: 100%;
            user-select: none;
            &::after {
                content: '\E6DF';
                font-family: element-icons !important;
                position: absolute;
                right: 10px;
                font-size: 14px;
                color: #c0c4cc;
                text-align: center;
                transition: 0.3s ease;
            }
        }
        .selectFouce {
            &::after {
                transform: rotate(-180deg);
            }
        }
        .select-list {
            position: absolute;
            top: 42px;
            z-index: 1;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            width: 100%;
            padding: 5px 0;
            transition: 0.15s;
            max-height: 999px;
            &::before,
            &::after {
                content: '';
                display: block;
                background: #fff;
                position: absolute;
                left: 34px;
                border-left: solid transparent;
                border-right: solid transparent;
                background: transparent;
            }
            &::before {
                top: -7px;
                border-bottom: solid #ebeef5;
                border-width: 7px;
            }
            &::after {
                top: -6px;
                border-bottom: solid #fff;
                border-width: 6px;
            }
            .select-item {
                font-size: 14px;
                padding: 0 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #606266;
                height: 34px;
                width: 100%;
                line-height: 34px;
                box-sizing: border-box;
                cursor: pointer;
                user-select: none;
                &:hover {
                    background-color: #f5f7fa;
                }
            }
            .selected {
                color: #409eff;
                font-weight: 700;
            }
        }
        .selectHidden {
            max-height: 0;
            padding: 0;
            border: 0;
            overflow: hidden;
        }
    }
    .onFocus {
        z-index: 1;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: -1;
        }
    }
    .userinfo {
        display: flex;
        align-items: center;
        margin: 0 20px 0 30px;
        & > img {
            margin-right: 20px;
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .user-info {
            display: inline-block;
            color: #fff;
            span {
                display: inline-block;
                &.nickname {
                    font-size: 14px;
                }
            }
        }
    }
    .clear-btn {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            color: #409eff;
        }
        &:active {
            opacity: 0.6;
        }
    }
}
</style>
