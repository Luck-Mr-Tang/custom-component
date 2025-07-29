import { createRouter, createWebHistory } from 'vue-router'
import routes from './autoload.ts'

const router = createRouter({
  history: createWebHistory('/demo'),
  routes
})

export default router 