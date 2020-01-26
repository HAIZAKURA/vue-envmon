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
              <router-link to="/air-mgr">
                <div class="tab">空调管理</div>
              </router-link>
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
  created: function() {
    this.setUid(null)
    this.setNam(null)
    this.setPow('0')
  },
  mounted: function() {
    console.log(this.pow)
    // this.$createGetDevStatus()
    this.$createGet()
    if (this.saveTimer) {
      clearInterval(this.saveTimer)
      this.saveTimer = setInterval(() => {
        this.saveDevStatus()
      }, this.$root.saveInterval * 60 * 1000)
    } else {
      this.saveTimer = setInterval(() => {
        this.saveDevStatus()
      }, this.$root.saveInterval * 60 * 1000)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key == 3) {
        this.$destoryGet()
        this.$root.getStatus = 0
      } else {
        if (this.$root.getStatus == 0) {
          // this.$createGetDevStatus()
          this.$createGet()
          this.$root.getStatus = 1
        }
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
    // getDevStatus() {
    //   this.$axios.get('dev/GetStatus').then(res => (this.$root.devStatus = res.data))
    // },
    getNowTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let time = yy+'-'+mm+'-'+dd+' '+hh+':'+mf;
      return time
    },
    //将两个json对象合并
    // twoJsonMerge(json1, json2 ){
    //   var length1 = 0, length2 = 0, jsonStr,str;
    //   for (var ever in json1) length1++;
    //   for (var ever in json2) length2++; 
    //   if (length1 && length2) str = ',';
    //   else str = '';
    //   jsonStr = ((JSON.stringify(json1)).replace(/,}/,'}') + (JSON.stringify(json2)).replace(/,}/,'}')).replace(/}{/,str);
    //   return JSON.parse(jsonStr);
    // },
    saveDevStatus() {
      var saveTimeJson = {
        "saveDate": this.getNowTime(),
        "instDate": new Date()
      }
      // var saveDataJson = this.twoJsonMerge(saveTimeJson, this.$root.devStatus)
      var saveDataJson = JSON.parse((JSON.stringify(saveTimeJson) + JSON.stringify(this.$root.devStatus)).replace(/}{/,','));
      console.log(saveDataJson)
      this.$axios.post('server/api/addData', saveDataJson).then(res => {
        if (res.data.status == "success") {
          console.log('数据记录成功')
        } else {
          console.log('数据记录失败，进行重试')
          this.saveDevStatus()
        }
      })
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
