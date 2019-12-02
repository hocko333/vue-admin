const isCollapseFromStorage = window.sessionStorage.getItem('isCollapse')

const state = {
  sideBar: {
    isCollapse: isCollapseFromStorage ? !!+isCollapseFromStorage : false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sideBar.isCollapse = !state.sideBar.isCollapse
    if (state.sideBar.isCollapse) {
      window.sessionStorage.setItem('isCollapse', '1')
    } else {
      window.sessionStorage.setItem('isCollapse', '0')
    }
  }
}

const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
