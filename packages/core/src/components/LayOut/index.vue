<script lang="ts" setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import LayoutBar from "./LayoutBar.vue";
import LayoutMenu from "./LayoutMenu";
import { Switch } from "@element-plus/icons-vue"

const collapse = ref(false); // 是否收起菜单


</script>

<template>
    <div class="layout-container">
        <div class="container">
            <div class="layout-menu" :style="{ 'width': collapse ? '70px' : '200px' }">
                <div class="menu-logo">
                    LOGO
                </div>
                <el-scrollbar style="width:0,flex-grow:1">
                    <LayoutMenu :collapse="collapse" />
                </el-scrollbar>
                <div class="menu-ctl">
                    <el-button color="#dee1e6" size="large" circle @click="collapse = !collapse">
                        <template #icon>
                            <el-icon size="16" color="#575f70">
                                <Switch />
                            </el-icon>
                        </template>
                    </el-button>
                </div>
            </div>
            <div class="layout-body">
                <div class="layout-bar">
                    <LayoutBar />
                </div>
                <div class="layout-main">
                    <el-scrollbar class="layout-main-scroll">
                        <RouterView />
                    </el-scrollbar>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@bar-height: 50px;
@gray-color: #f1f3f4;

.layout-container {
    position: relative;
    width: 100vw;
    height: 100vh;

    .container {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        .layout-menu {
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: all .5s;
        }

        .layout-body {
            height: 100%;
            width: 0;
            flex-grow: 1;
            background-color: @gray-color;
        }

        .layout-bar {
            height: @bar-height;
        }

        .layout-main {
            height: calc(100% - @bar-height - 8px);
            box-sizing: border-box;
            padding: 8px;
        }

        .layout-main-scroll {
            background-color: #ffffff;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 10px;
            box-sizing: border-box;
        }

        .menu-logo {
            height: 58px;
            font-size: 24px;
            text-align: center;
            line-height: 58px;
            // background-color: #304156;
        }

        .menu-ctl {
            // background-color: #304156;
            height: 50px;
            // padding-left: 20px;
            display: flex;
            align-items: center;
            // border-top: 1px solid #f4f4f5;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

}
</style>
