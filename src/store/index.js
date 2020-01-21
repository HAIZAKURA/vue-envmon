import Vue from 'vue'
import Vuex from 'vuex'
import state from 'src/store/state'
import * as getters from 'src/store/getters'
import * as actions from 'src/store/actions'
import mutations from 'src/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
