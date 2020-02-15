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

Vue.prototype.$createGet = function() {
  if (this.$root.getTimer) {
    clearInterval(this.$root.getTimer)
    this.$root.getTimer = setInterval(() => {
      this.$axios.get('http://127.0.0.1:5000/GetOthers').then(resOth => (this.$root.devOth = resOth.data))
      // this.$axios.get('dev/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
      // this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devStatus = resCfg.data))
      setTimeout(() => {
        this.$axios.get('http://127.0.0.1:5000/GetCfg').then(resCfg => (this.$root.devCfg = resCfg.data))
        setTimeout(() => {
          this.$axios.get('http://127.0.0.1:5000/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
          // this.$axios.get('dev/GetOthers').then(resOth => (this.$root.devOth = resOth.data))
        }, 800)
      }, 800)
    }, 2500)
  } else {
    this.$root.getTimer = setInterval(() => {
      this.$axios.get('http://127.0.0.1:5000/GetOthers').then(resOth => (this.$root.devOth = resOth.data))
      // this.$axios.get('dev/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
      // this.$axios.get('dev/GetCfg').then(resCfg => (this.$root.devStatus = resCfg.data))
      setTimeout(() => {
        this.$axios.get('http://127.0.0.1:5000/GetCfg').then(resCfg => (this.$root.devCfg = resCfg.data))
        setTimeout(() => {
          this.$axios.get('http://127.0.0.1:5000/GetStatus').then(resStatus => (this.$root.devStatus = resStatus.data))
          // this.$axios.get('dev/GetOthers').then(resOth => (this.$root.devOth = resOth.data))
        }, 800)
      }, 800)
    }, 2500)
  }
}

Vue.prototype.$destoryGet = function() {
  clearInterval(this.$root.getTimer)
}

Vue.prototype.$getTime = function() {
  let yy = new Date().getFullYear();
  let mm = new Date().getMonth()+1;
  let dd = new Date().getDate();
  let hh = new Date().getHours();
  let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
  let time = yy+'-'+mm+'-'+dd+' '+hh+':'+mf;
  return time
}

Vue.prototype.$saveDevStatus = function() {
  var saveTimeJson = {
    "saveDate": this.$getTime(),
    "instDate": new Date()
  }
  var saveDataJson = JSON.parse((JSON.stringify(saveTimeJson) + JSON.stringify(this.$root.devStatus)).replace(/}{/,','));
  // console.log(saveDataJson)
  this.$axios.post('http://127.0.0.1:3000/api/addData', saveDataJson).then(res => {
    if (res.data.status == "success") {
      // console.log('数据记录成功')
    } else {
      // console.log('数据记录失败，进行重试')
      this.saveDevStatus()
    }
  })
}

Vue.prototype.$destorySave = function() {
  clearInterval(this.$root.saveTimer)
}

Vue.prototype.$createSave = function() {
  if (this.$root.saveTimer) {
    clearInterval(this.$root.saveTimer)
    this.$root.saveTimer = setInterval(() => {
      this.$saveDevStatus()
    }, this.$root.saveInterval * 60 * 1000)
  } else {
    this.$root.saveTimer = setInterval(() => {
      this.$saveDevStatus()
    }, this.$root.saveInterval * 60 * 1000)
  }
}

new Vue({
  data: function() {
    return {
      saveInterval: 1,
      getStatus: 1,
      devStatus: {},
      devCfg: {},
      devOth: {},
      getTimer: '',
      saveTimer: '',
      showMod: {
        "tempOnee": true,
        "tempTwoo": true,
        "tempThre": true,
        "humdOnee": true,
        "humdTwoo": true,
        "humdThre": true,
        "sftrOnee": true,
        "sftrTwoo": true,
        "sftrThre": true,
        "sftrFour": true,
        "fansTate": true,
        "sffAnste": true,
        "dehuStae": true,
        "pumpStae": true,
        "wtlvOnee": true,
        "wtlvTwoo": true,
        "wtlvThre": true,
        "wtlvFour": true,
        "wtlvFive": true,
        "oxtrOnee": true,
        "oxtrTwoo": true,
        "oxtrThre": true,
        "oxtrFour": true,
        "maauStae": true,
        "aminStae": true,
        "signStae": true,
        "trasApha": true,
        "trasBpha": true,
        "trasCpha": true,
        "bbarAtem": true,
        "bbarBtem": true,
        "bbarCtem": true,
        "atspAlam": true,
        "hppwAlam": true,
        "fppwAlam": true,
        "dtupAlam": true,
        "illeAlam": true,
        "smokAlam": true,
        "upsoVolt": true,
        "upsoCurr": true,
        "upsoFreq": true,
        "upsoPowe": true,
        "tratCurr": true,
        "traoVolt": true,
        "traoFreq": true,
        "traoPfcc": true,
        "trasPwhb": true,
        "resiCurr": true,
        "leakCurr": true,
        "thunStri": true,
        "spdhAlam": true,
        "scbpAlam": true,
        "upsoLoad": true,
        "upsbTemp": true,
        "upsbVolt": true,
        "upsfCode": true
      }
    }
  },
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
