import {
  setUserId,
  setUserPo,
  setUserNa
} from '@/utils/storage'
import * as types from './mutation-types'

// 设置用户UID
export const setUid = function({ commit }, uid) {
  commit(types.SET_UID, setUserId(uid))
}
// 设置用户POW
export const setPow = function({ commit }, pow) {
  commit(types.SET_POW, setUserPo(pow))
}
// 设置用户NAM
export const setNam = function({ commit }, nam) {
  commit(types.SET_NAM, setUserNa(nam))
}
