 import createRequest from './request'
import { BASE_URL } from '@/config'

const http = createRequest({ baseURL: BASE_URL })

export default http