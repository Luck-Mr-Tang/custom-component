import { App } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入样式
import './styles/element/index.scss'
import 'element-plus/dist/index.css'

// 导入工具函数
import * as requestUtils from './utils/request'

// 导入API
import * as userApi from './api/user'

// 导入指令
import setDirective from './directives'

// 导入配置
import * as config from './config'

// 导出类型定义
export * from './types/axios'

// 核心组件列表
const components = {
 
}

// 安装函数
const install = (app: App): void => {
  // 注册Element Plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  // 注册组件
  Object.keys(components).forEach(key => {
    app.component(key, components[key as keyof typeof components])
  })

  // 安装插件
  app.use(createPinia())
  app.use(ElementPlus)
  
  // 设置指令
  setDirective(app)
}

// 导出核心组件
export {
  // 组件
  // 工具函数
  requestUtils,
  
  // API
  userApi,
  
  // 指令
  setDirective,
  
  // 配置
  config,

  // 安装函数
  install,
};

// 默认导出
export default {
  install,
  ...components,
};