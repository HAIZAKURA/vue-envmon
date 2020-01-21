import { getUserId, getUserPo, getUserNa } from 'src/utils/storage'

const state = {
  uid: getUserId() || null, // 用户UID
  pow: getUserPo() || null, // 用户权限
  nam: getUserNa() || null  // 用户名
}

export default state
