import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  token: '',
  entryUrl: ''
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [persistedState()],
  state,
  actions,
  getters,
  mutations
})
