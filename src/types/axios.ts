import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求配置的扩展
export interface RequestConfig extends AxiosRequestConfig {
  loading?: boolean
}

// 接口返回数据的通用格式
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 自定义的错误类型
export interface ApiError extends Error {
  code?: number
  config?: RequestConfig
  response?: AxiosResponse
}

// 请求方法的返回类型
export type ApiResult<T> = Promise<T> 