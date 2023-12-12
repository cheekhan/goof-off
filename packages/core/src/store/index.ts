import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// export default createPinia().use(piniaPluginPersistedstate);

export default createPinia().use(createPersistedState({
    auto: true
}))