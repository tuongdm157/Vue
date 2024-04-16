import { createApp } from "vue"
import App from "./App.vue"

// styles
import "./style.css"

// plugins
import vuetify from "./plugins/vuetify"
import router from "./router/router"
import { createPinia } from "pinia"

const pinia = createPinia()

createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .mount("#app")
