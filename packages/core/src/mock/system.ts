
// mock的页面响应结构
export const pageList = [
    { pageID: "demo-d3", name: "d3组件", remark: "", path: "/demo/d3", pageType: "" },
    { pageID: "demo-component", name: "组件测试", remark: "", path: "/demo/component", pageType: "" },
    { pageID: "system-pages", name: "页面管理", remark: "", path: "/system/pages", pageType: "" },
    { pageID: "system-menus", name: "菜单管理", remark: "", path: "/system/menus", pageType: "" },
    { pageID: "access-roles", name: "角色管理", remark: "", path: "/access/roles", pageType: "" },
    { pageID: "access-groups", name: "用户组管理", remark: "", path: "/access/groups", pageType: "" },
    { pageID: "access-users", name: "用户管理", remark: "", path: "/access/users", pageType: "" },
]

// mock的权限结构
export const privilegeList = [
    { privilegeID: "1", name: "增加", code: "system-pages:list:add", action: "view", remark: "" },
    { privilegeID: "2", name: "删除", code: "system-pages:list:delete", action: "hidden", remark: "" },
    { privilegeID: "3", name: "修改", code: "system-pages:list:update", action: "disabled", remark: "" },
]

// 菜单结构
export const menuList = [
    {
        menuID: "1", name: "演示", pageID: "", pageName: "", pagePath: "", iconName: "PieChart", sort: 1, children: [
            { menuID: "2", name: "d3组件", pageID: "demo-d3", pageName: "d3组件", pagePath: "/demo/d3", iconName: "Compass", sort: 1, },
            { menuID: "3", name: "组件测试", pageID: "demo-component", pageName: "组件测试", pagePath: "/demo/component", iconName: "Compass", sort: 2, },
        ]
    },
    {
        menuID: "4", name: "权限管理", pageID: "", pageName: "", pagePath: "", iconName: "PieChart", sort: 3, children: [
            { menuID: "6", name: "用户管理", pageID: "access-users", pageName: "用户管理", pagePath: "/access/users", iconName: "QuestionFilled", sort: 3, },
            { menuID: "7", name: "用户组管理", pageID: "access-groups", pageName: "用户组管理", pagePath: "/access/groups", iconName: "QuestionFilled", sort: 2, },
            { menuID: "8", name: "角色管理", pageID: "access-roles", pageName: "角色管理", pagePath: "/access/roles", iconName: "QuestionFilled", sort: 1, },
        ]
    },
    {
        menuID: "5", name: "系统管理", pageID: "", pageName: "", pagePath: "", iconName: "PieChart", sort: 2, children: [
            { menuID: "9", name: "菜单管理", pageID: "system-menus", pageName: "菜单管理", pagePath: "/system/menus", iconName: "QuestionFilled", sort: 1, },
            { menuID: "10", name: "页面维护", pageID: "system-pages", pageName: "页面管理", pagePath: "/system/pages", iconName: "QuestionFilled", sort: 1, },
        ]
    }
]