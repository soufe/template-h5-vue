import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  token: ''
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [persistedState()],
  state,
  getters,
  mutations,
  actions
})
