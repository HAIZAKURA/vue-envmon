import * as types from './mutation-types'

const mutations = {
  // 修改用户POW
  [types.SET_UID](state, uid) {
    state.uid = uid
  },
  // 修改用户POW
  [types.SET_POW](state, pow) {
    state.pow = pow
  },
  // 修改用户NAM
  [types.SET_NAM](state, nam) {
    state.nam = nam
  }
}

export default mutations
