import { roleList, groupList, userList, login } from "./access";
import { pageList, privilegeList, menuList } from "./system"


export default {
    "/role-list": roleList,
    "/group-list": groupList,
    "/user-list": userList,
    "/page-list": pageList,
    "/privilege-list": privilegeList,
    "/menu-list": menuList,
    "/login": login
}