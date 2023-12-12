// 管理用户数据
import {defineStore} from 'pinia'
import {ref} from 'vue'
// import {loginAPI} from '@/apis/user'
 
export default defineStore('userInfo',()=>{
    // 1.定义管理用户数据的state,这个里面有一些用户信息和权限信息
    const userInfo=ref({})
    // 2.定义获取接口数据的action函数
    // const getUserInfo=async({account,password})=>{
    //     const res=await loginAPI({account,password})
    //     userInfo.value=res.result
    // }
    //3.以对象的格式把state和action return 出去
    return {
        userInfo,
        // getUserInfo
    }
})