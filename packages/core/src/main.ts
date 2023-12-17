import { element } from "@top/design"
import { createApp } from "vue"
import AppPage from "./App.vue"
import router from "./router"



createApp(AppPage)
    .use(router)
    .use(element)
    .mount('#app')