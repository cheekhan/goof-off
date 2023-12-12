<template>
    <div class="layout-bar-container">
        <div class="person-container">
            <div class="user-info-container">
                <el-avatar shape="square" :src-set="squareUrl" />
                <div class="user-infor">
                    <div class="second">你好! {{name}}</div>
                </div>
            </div>
            <div class="user-infor"> | </div>
            <div class="user-logout cp" @click="logout"> 退出登录 </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    import {useRouter} from 'vue-router'
    import squareUrl from '../../assets/temp/user-img.jpg'

    const router=useRouter()
    const name = ref('admin')
    //退出登录
    const logout = () => {
        // console.log(store.loginInfo.token,store.loginInfo.info)
        router.push({name:'login'})
    }
</script>

<style lang="less" scoped>
    .layout-bar-container {
        margin: 8px 8px 0 8px;
        height: 100%;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;

        .person-container {
            display: flex;
            align-items: center;

            .user-info-container {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .user-infor {
                    font-size: 14px;
                    padding-left: 8px;
                    padding-right: 5px;
                    color: #393838;
                }
            }

            .user-logout {
                padding-left: 5px;
                color: #393838;
                font-size: 14px;

                &.cp {
                    cursor: pointer;
                }
            }
        }

    }
</style>