import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import type { RequestConfig, ApiResponse, ApiError, ApiResult } from '@/types/axios'
import { loadingManager } from './loading'

class Request {
  private instance: AxiosInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const customConfig = config as RequestConfig
        
        if (customConfig.loading !== false) {
          loadingManager.show()
        }
        
        if (config.method?.toLowerCase() === 'get') {
          config.paramsSerializer = {
            serialize: params => {
              return Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&')
            }
          }
        }
        
        return config
      },
      (error: ApiError) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        loadingManager.hide()
        
        const { code, message, data } = response.data
        
        if (code === 200) {
          return data
        } else {
          ElMessage.error(message || '请求失败')
          const error: ApiError = new Error(message || '请求失败')
          error.code = code
          return Promise.reject(error)
        }
      },
      (error: ApiError) => {
        loadingManager.hide()
        
        ElMessage.error(this.getErrorMessage(error))
        return Promise.reject(error)
      }
    )
  }

  private getErrorMessage(error: ApiError): string {
    const status = error.response?.status
    switch (status) {
      case 400: return '请求错误'
      case 401: return '未授权，请登录'
      case 403: return '拒绝访问'
      case 404: return '请求地址出错'
      case 408: return '请求超时'
      case 500: return '服务器内部错误'
      case 501: return '服务未实现'
      case 502: return '网关错误'
      case 503: return '服务不可用'
      case 504: return '网关超时'
      case 505: return 'HTTP版本不受支持'
      default: return '网络连接错误'
    }
  }

  public request<T = any>(config: RequestConfig): ApiResult<T> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: RequestConfig): ApiResult<T> {
    return this.instance.get(url, config)
  }

  public post<T = any>(url: string, data?: any, config?: RequestConfig): ApiResult<T> {
    return this.instance.post(url, data, config)
  }
}

const createRequest = (Options:RequestConfig) =>{
  return new  Request({
    baseURL: Options.baseURL,
  })
}
export default createRequest 