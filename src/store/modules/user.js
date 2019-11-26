import { getMenuList } from '@/api/user'
import { Message } from 'element-ui'

const state = {
  menuList: []
}

const mutations = {
  SET_MENU_LIST(state, menuList) {
    state.menuList = menuList
  }
}

const actions = {
  getMenuList({ commit, state }) {
    return new Promise((resolve, reject) => {
      getMenuList().then(response => {
        const { data: res } = response
        if (res.code !== 200) return Message.error('获取导航失败，请稍后重试~~')

        commit('SET_MENU_LIST', res.data)
        resolve(res)
      }).catch(err => reject(err))
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
