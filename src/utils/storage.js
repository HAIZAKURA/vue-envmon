const _storage = window.localStorage
const storage = {
  get(key, data = []) {
    if (_storage) {
      return _storage.getItem(key)
        ? Array.isArray(data)
          ? JSON.parse(_storage.getItem(key))
          : _storage.getItem(key)
        : data
    }
  },
  set(key, val) {
    if (_storage) {
      _storage.setItem(key, val)
    }
  },
  clear(key) {
    if (_storage) {
      _storage.removeItem(key)
    }
  }
}

/**
 * 用户uid
 * @type USERID_KEY：key值
 */
const USERID_KEY = '_userID__'
// 获取用户uid
export function getUserId() {
  return Number(storage.get(USERID_KEY, null))
}
// 修改用户uid
export function setUserId(uid) {
  storage.set(USERID_KEY, uid)
  return uid
}

/**
 * 用户权限
 * @type USERPO_KEY：key值
 */
const USERPO_KEY = '_userPO__'
// 获取用户PO
export function getUserPo() {
  return Number(storage.get(USERPO_KEY, null))
}
// 修改用户PO
export function setUserPo(pow) {
  storage.set(USERPO_KEY, pow)
  return pow
}

/**
 * 用户名
 * @type USERNA_KEY：key值
 */
const USERNA_KEY = '_userNA__'
// 获取用户NA
export function getUserNa() {
  return Number(storage.get(USERNA_KEY, null))
}
// 修改用户NA
export function setUserNa(nam) {
  storage.set(USERPO_KEY, nam)
  return nam
}