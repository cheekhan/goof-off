import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayoutContainer from "../components/LayOut/index.vue";
import LoginPage from "../views/login/index.vue"
import allRoutes from "./routes"
// import { beforeHook, afterHook } from "./routerGuard"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: LayoutContainer,
        children: allRoutes,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    // 解决刷新页面，路由警告
    {
        path: "/:pathMatch(.*)*",
        component: LayoutContainer,
        children: [
            { path: '', component: () => import("../views/ErrorPages/404.vue") }
        ]

    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

// router.beforeEach(beforeHook)
// router.afterEach(afterHook)
export default router;
