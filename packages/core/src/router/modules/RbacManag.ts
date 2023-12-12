import { RouterView } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// 用户管理
import userVue from "@/views/access/users/index.vue"
// 用户组管理
import userGroupVue from "@/views/access/groups/index.vue";
// 角色管理
import roleVue from "@/views/access/roles/index.vue"
// 权限组管理
// import actionGroupVue from "@/views/AccessControl/actionGroup.vue"
// import actionGroupVue from "@/views/AccessControl/authGroup/index.vue"
// 权限管理
// import actionVue from "@/views/AccessControl/action.vue"
// 菜单管理
// import menuVue from "@/views/AccessControl/menu.vue";
// 页面列表
// import pageVue from "@/views/AccessControl/page.vue"



export default <RouteRecordRaw>{
    path: "access",
    component: RouterView,
    name: "access",
    children: [
        { // 用户管理
            path: "users",
            component: userVue,
            name: "access-user"
        },
        { // 用户组管理
            path: "groups",
            component: userGroupVue,
            name: 'access-user-group'
        },
        { // 角色管理
            path: "roles",
            component: roleVue,
            name: "access-role"
        },
        // { // 权限组管理
        //     path: 'action-group',
        //     component: actionGroupVue,
        //     name: "access-action-group"
        // },
        // { // 权限管理
        //     path: 'action',
        //     component: actionVue,
        //     name: "access-action"
        // },
        // { // 菜单管理
        //     path: 'menus',
        //     component: menuVue,
        //     name: "access-menus"
        // },
        // { // 页面管理
        //     path: "pages",
        //     component: pageVue,
        //     name: 'access-pages',
        // },
    ]

};
