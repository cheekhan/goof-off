import BaseController from "../BaseController";

// 定义所有的类型
// 菜单类型
export interface menuBean extends baseBean {
    menuID?: string;
    name: string;
    pageID?: string;
    pageName?: string;
    pagePath?: string;
    iconName?: string;
    sort?: number;
    children?: Array<menuBean>
}
// 权限类型
export interface privilegeBean extends baseBean {
    privilegeID?: string;
    name?: string;
    code?: string;
    action?: string;
}
// 页面结构类型
export interface pageBean extends baseBean {
    pageID?: string;
    name?: string;
    path?: string;
    pageType?: string;
}

/**
 * 系统管理模块的controller
 */
export class SystemController extends BaseController {
    // 获取页面列表
    async pageList(): Promise<pageBean[]> {
        const response = await this.useGetResponse<pageBean[]>('/page-list', {})
        return response
    }
    // 获取权限列表
    async privilegeList(): Promise<privilegeBean[]> {
        const response = await this.useGetResponse<privilegeBean[]>('/privilege-list', {})
        return response
    }
    // 获取菜单列表
    async menuList(): Promise<menuBean[]> {
        const response = await this.useGetResponse<menuBean[]>('/menu-list', {})
        console.log('菜单列表：', response)
        return response
    }
}

const instance = new SystemController();


export default instance


