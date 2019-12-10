import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'


Vue.use(VueRouter)

const constRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index'),
        meta: { title: '首页' }
      },
      {
        path: 'page-permission',
        name: 'PagePermission',
        component: () => import('@/views/permission/page-permission'),
        meta: { title: '页面权限' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { title: '登录' }
  },
  {
    path: '/document',
    component: Layout,
    redirect: '/document/index',
    children: [
      {
        path: 'index',
        name: 'Document',
        component: () => import('@/views/document/index'),
        meta: { title: '文档' }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    children: [
      {
        path: 'index',
        name: 'Profile',
        component: () => import('@/views/profile/index'),
        meta: { title: '个人中心' }
      }
    ]
  }
]

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constRoutes
  })

const router = createRouter()

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
