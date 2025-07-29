import { createRouter, createWebHistory } from 'vue-router'
import routes from './autoload'

const router = createRouter({
  history: createWebHistory('/demo'),
  routes
})

export default router 