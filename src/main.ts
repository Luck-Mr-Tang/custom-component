import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'  //引入element-plus库

import router from './router'
import App from './App.vue'
import setDirective from './directives'

import './styles/element/index.scss'

import 'element-plus/dist/index.css'  //引入element-plus样式

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入vite-plugin-svg-icons注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
setDirective(app)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
