import { permission } from './permission'
const setDirective = (app) => {
  // 注册指令
  app.directive('permission', permission)
}

export default setDirective