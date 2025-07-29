import http from '@/utils/http'
import type { ApiResult } from '@/types/axios'

export interface LoginParams {
  username: string
  password: string
}

export interface UserInfo {
  id: number
  username: string
  // ...其他字段
}

export interface LoginResponse {
  token: string
  userInfo: UserInfo
}

export const login = (data: LoginParams): ApiResult<LoginResponse> => {
  return http.post('/user/login', data)
}

export const loginOut = (): ApiResult<UserInfo> => {
  return http.post('/user/loginOut')
}

export const getUserInfo = (id: number): ApiResult<UserInfo> => {
  return http.get(`/user/${id}`)
}

// 禁用loading的请求示例
export const checkStatus = (): ApiResult<boolean> => {
  return http.get('/status', { loading: false })
} 