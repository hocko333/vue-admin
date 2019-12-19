import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import axios from 'axios'
import Fragment from 'vue-fragment'
import VueClipboard from 'vue-clipboard2'

import settings from '@/settings'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
import '@/permission'

Vue.use(ElementUI)
Vue.use(Fragment.Plugin)
Vue.use(VueClipboard)

axios.defaults.baseURL = settings.baseUrlOfMock
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
