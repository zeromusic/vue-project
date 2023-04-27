import { createApp } from 'vue'
import App from './App.vue' //首页面
import router from './router'
import 'element-plus/dist/index.css' //全局样式
import axios from './http/axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//App.use(router) //挂载router
//.use(router).use(pinia).mount('#app') //挂载index.html
//App.use(pinia) //挂载pinia

import pinia from './utils/pinia'
//const pinia = createPinia()
//引入组件
//import MyComponent from './components/MyComponent.vue'
const app = createApp(App)
app.use(pinia)//挂载pinia
//全局注册组件 全局组件
//app.component('MyComponent',MyComponent)

app.use(router)//挂载router

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')

app.config.globalProperties.$axios = axios
