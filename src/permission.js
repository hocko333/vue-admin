import NProgress from 'nprogress'
import router from '@/router'
import getPageTitle from '@/utils/page-title'
import {getToken} from '@/utils/token'

NProgress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta) {
        document.title = getPageTitle(to.meta.title)
    } else {
        document.title = getPageTitle()
    }
    if (getToken()) {
        // 已登录
        if (to.path === '/login') {
            // 已登录情况下，即使去login页面，也会重定向到首页
            next({path: '/'})
            document.title = getPageTitle('首页')
            return NProgress.done()
        } else {
            next()
            return NProgress.done()
        }
    } else {
        // 未登录
        if (to.path === '/login') {
            next()
            return NProgress.done()
        } else {
            // 标记 redirect
            next(`/login?redirect=${to.path}`)
            return NProgress.done()
        }
    }
})

router.afterEach(() => {NProgress.done()})
