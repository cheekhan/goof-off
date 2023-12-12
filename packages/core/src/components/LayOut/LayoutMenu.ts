import { h, defineComponent, ref, Ref } from "vue"
import systemController from "../../api/modules/systemController"
import type { menuBean } from "../../api/modules/systemController"
import { ElMenu, ElMenuItem, ElSubMenu, ElIcon } from "element-plus"
import * as icons from "@element-plus/icons-vue"

// 获取菜单数据
const dataMenu: Ref<Array<menuBean>> = ref([])
systemController.menuList().then(response => {
    dataMenu.value = response;
})



export default defineComponent({
    name: "LayoutMenu",
    props: {
        collapse: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        return () => {
            const genItem = (items: menuBean) => {
                // menuID: "1", name: "演示", pageID: "", pageName: "", pagePath: "", iconName: "PieChart", sort: 1, children:
                const icon = items.iconName ? icons[items.iconName] : icons['DataLine'];
                if (items.children) { // 有children，说明非叶子节点
                    const subItem = items.children.map(item => genItem(item));
                    return h(
                        ElSubMenu,
                        { index: items.name },
                        {
                            title: () => [
                                h(ElIcon, null, { default: () => h(icon) }),
                                h('span', null, { default: () => items.name })
                            ],
                            default: () => subItem
                        }
                    )
                } else { // 叶子节点,可以直接进行渲染,渲染一个 ElMenuItem组件，然后给title插槽传入icon和名称
                    return h(
                        ElMenuItem,
                        { index: items.pagePath },
                        {
                            title: () => [
                                h(ElIcon, null, { default: () => h(icon) }),
                                h('span', null, { default: () => items.name })
                            ]
                        }
                    )
                }
            }
            // 根节点挂载的所有子菜单
            const vnodes = dataMenu.value.map(menu => {
                return genItem(menu)
            })
            // 返回menu的根节点
            return h(ElMenu,
                {
                    router: true, collapse: props.collapse,
                    collapseTransition: false, uniqueOpened: true,
                    class: "el-menu-vertical-demo,layout-menu-modify", style: { borderRight: 'none' }
                },
                { default: () => vnodes }
            )
        }
    }
})
