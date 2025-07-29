import { App } from 'vue'
import { permission } from './permission'

const setDirective = (app: App) => {
  // 注册指令
  app.directive('permission', permission)
}

export default setDirective