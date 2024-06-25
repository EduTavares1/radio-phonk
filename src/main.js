import { createApp } from "vue"
import VueYtframe from "vue3-ytframe"
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(VueYtframe).mount("#app")