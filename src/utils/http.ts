import createRequest from './request'
import { BASE_URL } from '@/config'

const http: ReturnType<typeof createRequest> = createRequest({ baseURL: BASE_URL })

export default http