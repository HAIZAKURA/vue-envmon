<template>
  <div id="app">
    <el-container>
      <el-main>
        <div id="header">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item v-if="this.pow == '0'" index="1">
              <router-link to="/">
                <div class="tab">登录</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '1' || this.pow == '2' || this.pow == '3'" index="1">
              <router-link to="/env-mon">
                <div class="tab">环境监控</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '1' || this.pow == '2' || this.pow == '3'" index="2">
              <router-link to="/pow-mon">
                <div class="tab">配电监控</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="3">
              <router-link to="/dev-cfg">
                <div class="tab">参数设置</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="4">
              <router-link to="/acc-mgr">
                <div class="tab">门禁管理</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="5">
              <!-- <router-link to="/air-mgr"> -->
                <div class="tab" @click="openAir()">空调管理</div>
              <!-- </router-link> -->
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="6">
              <router-link to="/dat-que">
                <div class="tab">数据查询</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '3'" index="7">
              <router-link to="/usr-mgr">
                <div class="tab">权限管理</div>
              </router-link>
            </el-menu-item>
          </el-menu>
          <!-- <el-button id="testBtn" type="danger" @click="testBtn()">TEST</el-button> -->
          <el-button v-if="this.pow != '0'" id="logOut" type="danger" @click="logOut()">登出</el-button>
          <el-button id="osk" type="primary" @click="osk()">键盘</el-button>
        </div>
        <br />
        <p style="display:none">{{ this.pow }}</p>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      activeIndex: '1',
    }
  },
  computed: {
    ...mapGetters(['uid','nam','pow'])
  },
  created: function() {
    this.setUid(null)
    this.setNam(null)
    this.setPow('0')
    this.$axios.get('http://localhost:3000/api/visa').then(res => (this.$root.showMod = res.data))
  },
  mounted: function() {
    // console.log(this.pow)
    this.$createGet()
    // if (this.saveTimer) {
    //   clearInterval(this.saveTimer)
    //   this.saveTimer = setInterval(() => {
    //     this.saveDevStatus()
    //   }, this.$root.saveInterval * 60 * 1000)
    // } else {
    //   this.saveTimer = setInterval(() => {
    //     this.saveDevStatus()
    //   }, this.$root.saveInterval * 60 * 1000)
    // }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      if (key == 3) {
        this.$destoryGet()
        this.$root.getStatus = 0
        this.$createGetInCfg()
      } else {
        if (this.$root.getStatus == 0) {
          this.$createGet()
          this.$root.getStatus = 1
          this.$destoryGetInCfg()
        }
        // this.$createGet()
        // this.$destoryGetInCfg()
      }
    },
    logOut() {
      this.setUid(null)
      this.setNam(null)
      this.setPow('0')
      this.activeIndex = '1'
      // console.log(this.uid)
      // console.log(this.pow)
      // console.log(this.nam)
      this.$router.push('/')
    },
    openAir() {
      let exec = require('child_process').exec;
      exec('C:\\air.lnk')
    },
    osk() {
      let exec = require('child_process').exec;
      exec('OSK')
    },
    ...mapActions(['setUid','setNam','setPow'])
  }
}
</script>

<style lang="stylus">
#app
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  user-select: none
  margin-top: -14px

a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}

.logout-link
  font-color #ffffff

.tab
  height 60px
  font-size 20px

#testBtn
  position absolute
  top 12px
  right 120px

#logOut
  position absolute
  top 22px
  right 120px

#osk
  position absolute
  top 22px
  right 30px
</style>
