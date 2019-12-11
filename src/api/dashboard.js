import request from '../utils/request'

export function getTabInfo() {
  return request({
    url: '/tab-info',
    method: 'get'
  })
}
