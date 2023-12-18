
// 角色列表
export const roleList = [
    { roleID: "1", name: "超级管理员", extendID: "", remark: "" },
    { roleID: "2", name: "应用运维管理员", extendID: "3", remark: "" },
    { roleID: "3", name: "应用运维开发", extendID: "4", remark: "" },
    { roleID: "4", name: "应用运维人员", extendID: "", remark: "" },
    { roleID: "5", name: "CMT系统人员", extendID: "", remark: "" },
]

// 用户组
export const groupList = [
    {
        groupID: '1', name: "xxx综合系统", parentID: '',
        roles: [
            { roleID: "1", name: "超级管理员", extendID: "", remark: "" },
        ],
    },
    {
        groupID: '2', name: "CMT用户组", parentID: '1',
        roles: [
            { roleID: "5", name: "CMT系统人员", extendID: "", remark: "" },
        ],
    },
    {
        groupID: '3', name: "应用运维组", parentID: '1',
        roles: [
            { roleID: "2", name: "应用运维管理员", extendID: "3", remark: "" },
        ],
    },
    {
        groupID: '4', name: "应用运维-开发-A组", parentID: '3',
        roles: [
            { roleID: "3", name: "应用运维开发", extendID: "4", remark: "" },
        ],
    },
    {
        groupID: '5', name: "应用运维-开发-B组", parentID: '3',
        roles: [
            { roleID: "3", name: "应用运维开发", extendID: "4", remark: "" },
        ],
    },

]

// 用户列表
export const userList = [
    {
        userID: "1", name: "管理员", acount: "admin", role: [
            { roleID: "1", name: "超级管理员", extendID: "", remark: "" },
        ], group: [
            { groupID: '1', name: "xxx综合系统" }
        ]
    },
    {
        userID: "2", name: "应用运维管理员", acount: "dev-admin", role: [], group: [
            { groupID: '3', name: "应用运维组", }
        ]
    },
    {
        userID: "3", name: "应用运维开发者01", acount: "dev-01", role: [], group: [
            { groupID: '4', name: "应用运维-开发-A组", }
        ]
    },
    {
        userID: "4", name: "应用运维开发者02", acount: "dev-02", role: [], group: [
            { groupID: '4', name: "应用运维-开发-A组", }
        ]
    },
    {
        userID: "5", name: "CMT运营", acount: "cmt-01", role: [], group: [
            { groupID: '2', name: "CMT用户组" }
        ]
    }
]

// 用户登录
export const login = {
    uname: "admin",
    uid: "12345456"
}