/**
 * 全局的状态
 *      user ： 用户相关
 *      
 */

import { defineStore } from "pinia"
import { ref } from "vue"
import type { Ref } from "vue"

// 用户信息类型
export interface UserInfoDto {
    uname?: string,
    uid?: string,
    token?: string
}


export default defineStore('app',
    () => {
        const info: Ref<UserInfoDto> = ref({
            uname: "root",
            uid: "0234kjahsdlif",
            token: "asdfasdfasdf"
        })
        const change = () => {
            info.value.uname = 'admin'
        }
        return {
            info, change
        }
    }
)