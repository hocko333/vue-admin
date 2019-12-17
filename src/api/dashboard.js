import request from '../utils/request'

export function getTabInfo() {
  return request({
    url: '/tab-info',
    method: 'get'
  })
}

export function getTableList() {
  return request({
    url: '/index-table-list',
    method: 'get'
  })
}
