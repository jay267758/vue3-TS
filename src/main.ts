import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import 'element-plus/dist/index.css'
import store from './store'
import router from './router'
import pinia from './pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
// app.use(ElementPlus) // 完整引入
app.use(ElementPlus, {
  locale: zhCn,//使用中文语言
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(pinia)
app.mount('#app')
