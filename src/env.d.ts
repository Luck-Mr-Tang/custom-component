/// <reference types="vite/client" />

// vite-plugin-svg-icons 类型声明
declare module 'virtual:svg-icons-register'
declare module 'virtual:svg-icons-names'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
} 