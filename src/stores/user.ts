import { defineStore } from 'pinia'
import { login, loginOut } from '@/api/user'
import type { LoginParams } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null
  }),
  
  actions: {
    async login(params: LoginParams) {
      const data = await login(params)
      this.token = data.token
      localStorage.setItem('token', data.token)
      return data
    },
    
    async logout() {
      await loginOut()
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    }
  }
}) 