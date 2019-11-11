import axios from 'axios'
import settings from '@/settings'

const service = axios.create({
  baseURL: settings.baseUrlOfMock,
  timeout: 5000
})

service.interceptors.request.use(config => {}, error => {})

// service.interceptors.response.use()
