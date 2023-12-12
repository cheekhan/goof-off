import { RouteRecordRaw, RouterView } from "vue-router";
import DemoIndexPage from "../../views/demo/d3/index.vue";
import DemoComponentPage from "../../views/demo/component/index.vue";

export default <RouteRecordRaw>{
    path: "demo",
    component: RouterView,
    name: "demo",
    children: [
        {
            path: "d3",
            component: DemoIndexPage,
            name: "demo-d3"
        },
        // {
        //     path: "tree",
        //     component: DemoTreeLayoutPage,
        //     name: "demo-tree"
        // },
        {
            path: "component",
            component: DemoComponentPage,
            name: "demo-component"
        },
    ]
};
