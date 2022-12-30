import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import store from './store'
import router from './router'
import pinia from './pinia'

const app = createApp(App)
app.use(router)
// app.use(ElementPlus) // 完整引入
app.use(store)
app.use(pinia)
app.mount('#app')
