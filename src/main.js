import { createApp } from "vue"
import VueYtframe from "vue3-ytframe"
import App from './App.vue'
import './style.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  MdLoop, IoPlaySkipBackSharp, IoPlaySkipForwardSharp,
  IoPauseSharp, IoPlaySharp 
} from "oh-vue-icons/icons"

addIcons(
  MdLoop, IoPlaySkipBackSharp, IoPlaySkipForwardSharp,
  IoPauseSharp, IoPlaySharp
)

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.use(VueYtframe).mount("#app")