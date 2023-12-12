/**
 * 用户信息状态
 *      用户名、id、token
 *      用户权限信息
 */
import { defineStore } from "pinia"
import { Ref, ref } from "vue"
// 用户信息
interface userInfo {
    name?: string,
    id?: string
}
// 权限信息
interface userAccess {

}


export default defineStore('user', () => {
    const info: Ref<userInfo> = ref({
        name: "root",
        id: "asdikjf;alkdjf;alksjdf"
    })
    const access: Ref<userAccess> = ref({})
    // 重置方法：用于退出登录、切换用户等场景
    const reset = () => {
        info.value = {};
        access.value = {}
    }

    return {
        info, access, reset
    }
})