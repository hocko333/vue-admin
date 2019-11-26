import axios from 'axios'
import settings from '@/settings'
import { getToken } from './token'

const service = axios.create({
  baseURL: settings.baseUrlOfMock,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  // 在发送请求之前做些什么
  config => {
    if (getToken()) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  // 对请求错误做些什么
  error => Promise.reject(error)
)

// 添加响应拦截器
service.interceptors.response.use(
  // 对响应数据做点什么
  response => {
    return response
  },
  // 对响应错误做点什么
  error => Promise.reject(error)
)

export default service
