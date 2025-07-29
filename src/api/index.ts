import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// API方法
export const testConnection = () => api.get('/test')
export const getTables = () => api.get('/tables')
export const getUsers = () => api.get('/users')
export const createUser = (userData: { name: string; email: string }) => 
  api.post('/users', userData)

// Login 相关接口
export const getLoginData = () => api.get('/login')

export default api