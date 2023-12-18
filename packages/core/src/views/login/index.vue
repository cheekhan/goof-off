<script setup lang="ts">
import { ref } from "vue"
import AccessControllerInstance from "../../api/modules/accessController";
import { useRouter } from "vue-router"

const router = useRouter()

const formData = ref({
    uname: "",
    upwd: ""
})

function handleLogin() {
    AccessControllerInstance.userLogin().then(r => router.push('/'))
}


</script>


<template>
    <div class="login-container">

        <el-form class="login-form">
            <el-form-item label="用户名">
                <el-input v-model="formData.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>

        </el-form>
    </div>
</template> 

<style scoped lang="less">
.login-container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
}

.login-form {
    width: 500px;
    margin: 100px auto;
    border-radius: 5px;
    background-color: #eaeef1;
    padding: 20px;
}
</style>