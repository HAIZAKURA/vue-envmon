import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;

Vue.prototype.$createGetDevStatus = function() {
  if (this.getTimer) {
    clearInterval(this.getTimer)
    this.getTimer = setInterval(() => {
      this.$axios.get('dev/GetStatus').then(res => (this.$root.devStatus = res.data))
    }, 2000)
  } else {
    this.getTimer = setInterval(() => {
      this.$axios.get('dev/GetStatus').then(res => (this.$root.devStatus = res.data))
    }, 2000)
  }
}

Vue.prototype.$destoryGetDevStatus = function() {
  clearInterval(this.getTimer)
}

Vue.prototype.$createGet = function() {
  if (this.getTimer) {
    clearInterval(this.getTimer)
    this.getTimer = setInterval(() => {
      this.$axios.get('dev/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
      // this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devStatus = resCfg.data))
      setTimeout(() => {
        this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devCfg = resCfg.data))
      }, 750)
    }, 1500)
  } else {
    this.getTimer = setInterval(() => {
      this.$axios.get('dev/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
      // this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devStatus = resCfg.data))
      setTimeout(() => {
        this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devCfg = resCfg.data))
      }, 750)
    }, 1500)
  }
}

Vue.prototype.$destoryGet = function() {
  clearInterval(this.getTimer)
}

new Vue({
  data: function() {
    return {
      saveInterval: 1,
      getStatus: 1,
      devStatus: {},
      devCfg: {}
    }
  },
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
