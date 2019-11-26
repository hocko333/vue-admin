import request from '../utils/request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getMenuList () {
  return request({
    url: 'menu-list',
    method: 'get'
  })
}
