import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// 获取所有模块的路径
const modulesFiles = require.context('./modules', true, /\.js$/)

// 导入所有模块
const modules = modulesFiles.keys().reduce((modules, modulesPath) => {
  const modulesName = modulesPath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const modulesValue = modulesFiles(modulesPath)
  modules[modulesName] = modulesValue.default
  return modules
}, {})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
  getters
})
