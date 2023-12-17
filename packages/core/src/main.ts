import { element } from "@top/design"
import { createApp } from "vue"
import "./style/index.less"
import AppPage from "./App.vue"
import router from "./router"
import store from "./store"



createApp(AppPage)
    .use(store)
    .use(router)
    .use(element)
    .mount('#app')