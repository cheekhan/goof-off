import BaseController from "../BaseController";

/**
 * 系统管理模块的controller
 */
export class AccessController extends BaseController {
    // 获取角色列表
    async roleList() {
        return this.useGetResponse('/role-list', {})
    }
    // 获取用户组列表
    async groupList() {
        return this.useGetResponse('/group-list', {})
    }
    // 获取用户列表
    async userList() {
        return this.useGetResponse('/user-list', {})
    }
    // 用户登录
    async userLogin() {
        return this.usePostResponse('/login', {})
    }
}

const AccessControllerInstance = new AccessController();


export default AccessControllerInstance