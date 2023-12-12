import d3Example from "./modules/d3Example";
import RbacManag from "./modules/RbacManag";
import system from "./modules/system"
import type { RouteRecordRaw } from "vue-router"

/**
 * 默认导出所有的路由
 */
export default <Array<RouteRecordRaw>>[
    d3Example,
    RbacManag,
    system
]