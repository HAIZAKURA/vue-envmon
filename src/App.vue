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
              <router-link to="/about">
                <div class="tab">设备设置</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="4">
              <router-link to="/about">
                <div class="tab">测量限制</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '3'" index="5">
              <router-link to="/acc-mgr">
                <div class="tab">门禁管理</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="6">
              <router-link to="/air-mgr">
                <div class="tab">空调管理</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '2' || this.pow == '3'" index="7">
              <router-link to="/dat-que">
                <div class="tab">数据查询</div>
              </router-link>
            </el-menu-item>
            <el-menu-item v-if="this.pow == '3'" index="8">
              <router-link to="/usr-mgr">
                <div class="tab">权限管理</div>
              </router-link>
            </el-menu-item>
          </el-menu>
          <el-button v-if="this.pow != '0'" id="logOut" type="danger" @click="logOut()">登出</el-button>
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    logOut() {
      this.setUid(null)
      this.setNam(null)
      this.setPow('0')
      // console.log(this.uid)
      // console.log(this.pow)
      // console.log(this.nam)
      this.$router.push('/')
      this.activeIndex = '1'
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
  margin-top -24px

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

#logOut
  position absolute
  top 12px
  right 30px
</style>
