import { createApp } from "vue"
import AppPage from "./App.vue"
import router from "./router"



createApp(AppPage)
    .use(router)
    .mount('#app')