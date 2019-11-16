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
        component: () => import('@/views/Dashboard'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { title: '登录' }
  }
]

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
