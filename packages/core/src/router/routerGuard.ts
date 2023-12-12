/**
 * 全局的路由守卫
 *      通过钩子的方式，传入前置的守卫函数列表，和后置的守卫列表
 * 
 */

import { } from "vue-router"
import type { RouteLocationNormalized, NavigationGuardWithThis, NavigationHookAfter } from "vue-router"

// 后置守卫回调函数
interface afterFn {
    (to: RouteLocationNormalized, from: RouteLocationNormalized): void
}

const beforeCall: Array<NavigationGuardWithThis<undefined>> = [];
const afterCall: Array<afterFn> = [];

// 前置守卫
const beforeHook: NavigationGuardWithThis<undefined> = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // console.log(to, from)
}

// 后置
const afterHook: NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // console.log(to, from)
    afterCall.forEach(fn => fn(to, from))
}

export { beforeHook }

export { afterHook }

// 添加一个后置函数
export function useAfterHook(fn: afterFn) {
    afterCall.push(fn)
}

// 添加前置函数
export function useBeforeHook(fn: NavigationGuardWithThis<undefined>) {
    beforeCall.push(fn)
}