import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

// 自动加载 views 目录下的所有页面
const modules = import.meta.glob('@/views/**/index.vue')

const mainRoutes: RouteRecordRaw[] = []
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: mainRoutes
  }
]

for (const path in modules) {
  const name = path.match(/\/views\/(.*)\/index.vue$/)?.[1]?.toLowerCase()
  if (name) {
      mainRoutes.push({
        path: `/${name}`,
        name: name,
      component: modules[path]
    })
  }
}
export default routes