import { RouterView } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// 菜单管理
import menuVue from "@/views/system/menus/index.vue";
// 页面列表
import pageVue from "@/views/system/pages/index.vue"


export default <RouteRecordRaw>{
    path: "system",
    component: RouterView,
    name: "system",
    children: [
        { // 菜单管理
            path: "menus",
            component: menuVue,
            name: "system-menus"
        },
        { // 页面管理
            path: "pages",
            component: pageVue,
            name: "system-pages"
        },
    ]

};
