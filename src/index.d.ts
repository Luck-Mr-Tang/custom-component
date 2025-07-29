import { App, Component } from 'vue'
import { Router } from 'vue-router'

// 组件类型声明
export interface WorkPackComponents {
  
}

// 工具函数类型
export interface HttpUtils {
  request: Function
  get: Function
  post: Function
  put: Function
  delete: Function
}

export interface LoadingUtils {
  showLoading: Function
  hideLoading: Function
}

export interface RequestUtils {
  createRequest: Function
  interceptors: Object
}

// API类型
export interface UserApi {
  getUserInfo: Function
  updateUserInfo: Function
  login: Function
  logout: Function
}

// 配置类型
export interface Config {
  BASE_URL: string
  TIMEOUT: number
}

// 主要安装函数类型
export interface InstallFunction {
  (app: App): void
}

// 主包类型声明
export declare const install: InstallFunction

// 组件导出
export declare const CustomerServiceChat: Component
export declare const MicroApp: Component
export declare const SelectDemo: Component
export declare const SvgIcon: Component
export declare const ThreeDEarth: Component
export declare const Layout: Component
export declare const MenuItem: Component
export declare const Calendar: Component
export declare const Chat: Component
export declare const Dashboard: Component
export declare const SystemRole: Component
export declare const SystemUser: Component
export declare const SystemUserInfo: Component

// 工具函数导出
export declare const httpUtils: HttpUtils
export declare const loadingUtils: LoadingUtils
export declare const requestUtils: RequestUtils

// API导出
export declare const userApi: UserApi

// 其他导出
export declare const setDirective: Function
export declare const router: Router
export declare const config: Config
export declare const useUserStore: Function

// 默认导出类型
declare const _default: {
  install: InstallFunction
} & WorkPackComponents

export default _default

// 全局类型声明
declare global {
  interface Window {

  }
}

// Vue组件类型扩展
declare module '@vue/runtime-core' {
  interface GlobalComponents {

  }
}