<template>
  <div class="env-mon">
    <el-row :gutter="20">
      <el-col :span="12">

        <div v-if="$root.showMod.tempOnee || $root.showMod.tempTwoo || $root.showMod.tempThre || $root.showMod.humdOnee || $root.showMod.humdTwoo || $root.showMod.humdThre">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">环境温湿度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4" v-if="$root.showMod.tempOnee">
                <span class="item-title">温度一</span>
                <p class="item-value">{{ $root.devStatus.tempOnee }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.tempOnee > $root.devCfg.tempUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" v-if="$root.showMod.tempTwoo">
                <span class="item-title">温度二</span>
                <p class="item-value">{{ $root.devStatus.tempTwoo }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.tempTwoo > $root.devCfg.tempUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" v-if="$root.showMod.tempThre">
                <span class="item-title">温度三</span>
                <p class="item-value">{{ $root.devStatus.tempThre }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.tempThre > $root.devCfg.tempUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" v-if="$root.showMod.humdOnee">
                <span class="item-title">湿度一</span>
                <p class="item-value">{{ $root.devStatus.humdOnee }}&nbsp;<small>&#37;</small></p>
                <p v-if="$root.devStatus.humdOnee > $root.devCfg.humdUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" v-if="$root.showMod.humdTwoo">
                <span class="item-title">湿度二</span>
                <p class="item-value">{{ $root.devStatus.humdTwoo }}&nbsp;<small>&#37;</small></p>
                <p v-if="$root.devStatus.humdTwoo > $root.devCfg.humdUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" v-if="$root.showMod.humdThre">
                <span class="item-title">湿度三</span>
                <p class="item-value">{{ $root.devStatus.humdThre }}&nbsp;<small>&#37;</small></p>
                <p v-if="$root.devStatus.humdThre > $root.devCfg.humdUplt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <br /><br />
        </div>

        <div v-if="$root.showMod.sftrOnee || $root.showMod.sftrTwoo || $root.showMod.sftrThre || $root.showMod.sftrFour">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">SF<small>6</small>&nbsp;浓度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6" v-if="$root.showMod.sftrOnee">
                <span class="item-title">浓度一</span>
                <p class="item-value">{{ $root.devStatus.sftrOnee }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.sftrOnee > $root.devCfg.sfupLimt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.sftrTwoo">
                <span class="item-title">浓度二</span>
                <p class="item-value">{{ $root.devStatus.sftrTwoo }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.sftrTwoo > $root.devCfg.sfupLimt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.sftrThre">
                <span class="item-title">浓度三</span>
                <p class="item-value">{{ $root.devStatus.sftrThre }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.sftrThre > $root.devCfg.sfupLimt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.sftrFour">
                <span class="item-title">浓度四</span>
                <p class="item-value">{{ $root.devStatus.sftrFour }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.sftrFour > $root.devCfg.sfupLimt"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <br /><br />
        </div>

        <div v-if="$root.showMod.fansTate || $root.showMod.sffAnste || $root.showMod.dehuStae || $root.showMod.pumpStae">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">设备控制</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6" v-if="$root.showMod.fansTate">
                <span class="item-title">排风机</span>
                <p>
                  <el-switch
                    v-model="$root.devOth.fansTate"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="1"
                    :inactive-value="0"
                    :disabled="!$root.devOth.maauStae"
                    @change="fanSwitch()"
                  >
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.sffAnste">
                <span class="item-title">SF<small>6</small>风机</span>
                <p>
                  <el-switch
                    v-model="$root.devOth.sffAnste"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="1"
                    :inactive-value="0"
                    :disabled="!$root.devOth.maauStae"
                    @change="sffSwitch()"
                  >
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.dehuStae">
                <span class="item-title">除湿机</span>
                <p>
                  <el-switch
                    v-model="$root.devOth.dehuStae"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="1"
                    :inactive-value="0"
                    :disabled="!$root.devOth.maauStae"
                    @change="dehSwitch()"
                  >
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.pumpStae">
                <span class="item-title">抽水泵</span>
                <p>
                  <el-switch
                    v-model="$root.devOth.pumpStae"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="1"
                    :inactive-value="0"
                    :disabled="!$root.devOth.maauStae"
                    @change="pumSwich()"
                  >
                  </el-switch>
                </p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        </div>

      </el-col>
      <el-col :span="12">

        <div v-if="$root.showMod.wtlvOnee || $root.showMod.wtlvTwoo || $root.showMod.wtlvThre || $root.showMod.wtlvFour || $root.showMod.wtlvFive">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">电缆沟水位</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4" v-if="$root.showMod.wtlvOnee">
                <span class="item-title">一号点</span>
                <p class="item-value">{{ $root.devStatus.wtlvOnee }}&nbsp;<small>mm</small></p>
                <p v-if="$root.devStatus.wtlvOnee > $root.devCfg.soakWtlv"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1" v-if="$root.showMod.wtlvTwoo">
                <span class="item-title">二号点</span>
                <p class="item-value">{{ $root.devStatus.wtlvTwoo }}&nbsp;<small>mm</small></p>
                <p v-if="$root.devStatus.wtlvTwoo > $root.devCfg.soakWtlv"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1" v-if="$root.showMod.wtlvThre">
                <span class="item-title">三号点</span>
                <p class="item-value">{{ $root.devStatus.wtlvThre }}&nbsp;<small>mm</small></p>
                <p v-if="$root.devStatus.wtlvThre > $root.devCfg.soakWtlv"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1" v-if="$root.showMod.wtlvFour">
                <span class="item-title">四号点</span>
                <p class="item-value">{{ $root.devStatus.wtlvFour }}&nbsp;<small>mm</small></p>
                <p v-if="$root.devStatus.wtlvFour > $root.devCfg.soakWtlv"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1" v-if="$root.showMod.wtlvFive">
                <span class="item-title">五号点</span>
                <p class="item-value">{{ $root.devStatus.wtlvFive }}&nbsp;<small>mm</small></p>
                <p v-if="$root.devStatus.wtlvFive > $root.devCfg.soakWtlv"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <br /><br />
        </div>

        <div v-if="$root.showMod.oxtrOnee || $root.showMod.oxtrTwoo || $root.showMod.oxtrThre || $root.showMod.oxtrFour">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">O<small>3</small>&nbsp;浓度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6" v-if="$root.showMod.oxtrOnee">
                <span class="item-title">浓度一</span>
                <p class="item-value">{{ $root.devStatus.oxtrOnee }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.oxtrOnee > $root.devCfg.oxtrUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.oxtrTwoo">
                <span class="item-title">浓度二</span>
                <p class="item-value">{{ $root.devStatus.oxtrTwoo }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.oxtrTwoo > $root.devCfg.oxtrUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.oxtrThre">
                <span class="item-title">浓度三</span>
                <p class="item-value">{{ $root.devStatus.oxtrThre }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.oxtrThre > $root.devCfg.oxtrUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.oxtrFour">
                <span class="item-title">浓度四</span>
                <p class="item-value">{{ $root.devStatus.oxtrFour }}&nbsp;<small>PPm</small></p>
                <p v-if="$root.devStatus.oxtrFour > $root.devCfg.oxtrUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <br /><br />
        </div>

        <div v-if="$root.showMod.maauStae || $root.showMod.aminStae || $root.showMod.signStae">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">状态切换及巡查签到</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6" v-if="$root.showMod.maauStae">
                <p v-if="$root.devOth.maauStae">
                  <el-button type="danger" @click="maSwitch()">M&nbsp;A&nbsp;N</el-button>
                </p>
                <p v-else>
                  <el-button type="success" @click="maSwitch()">AUTO</el-button>
                </p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.aminStae">
                <p>
                  <el-button @click="defSwitch()">布撤防切换</el-button>
                </p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.aminStae">
                <span class="item-title">布防状态</span>
                <p v-if="!$root.devOth.aminStae"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6" v-if="$root.showMod.signStae">
                <p>
                  <el-button type="danger" @click="signIn()">签到</el-button>
                </p>
              </el-col>
            </el-row>
          </div>
        </el-card>
        </div>

      </el-col>
    </el-row>
    <!-- <el-button type="danger" @click="getTEST()">123</el-button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import GLOBAL from '@/api/global_variable'

export default {
  name: 'EnvMon',
  components: {
  },
  data() {
    return {
      // DevStatus: {},
      // DevStatus: GLOBAL.DevStatus,
      // EnvMonStatus: {
      //   fan: true,
      //   sf_fan: false,
      //   dehum: true,
      //   pump: false,
      //   man_auto: true,
      //   def: false,
      // },
      nowTime: '',
      // timer: ''
    }
  },
  computed: {
    ...mapGetters(['nam'])
  },
  // mounted: function() {
  //   if (this.timer) {
  //     clearInterval(this.timer)
  //   } else {
  //     this.timer = setInterval(() => {
  //       this.getStatus()
  //     }, 2000)
  //   }
  // },
  methods: {
    // getStatus() {
      // this.$axios.get('dev/GetStatus').then(res => (this.DevStatus = res.data))
      // this.$axios.get('dev/GetStatus').then(res => (this.$root.devStatus = res.data))
    // },
    setSwitch(id) {
      this.$axios.get('http://127.0.0.1:5000/SetSwitch/' + id)
      .then(() => {
        // console.log(" Code: " + id)
        this.$createGet()
      })
      .catch((err) => {
        // console.log(err)
        this.$createGet()
      })
      // this.$destoryGet()
      // setTimeout(() => {
      //   this.$axios.get('dev/SetSwitch/' + id).then(() => {
      //     console.log(" Code: " + id)
      //     this.$createGet()
          // setTimeout(() => {
          //   this.$createGet()
          // }, 1000)
      //   })
      // }, 1000)
    },
    getNowTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      let time = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
      return time
    },
    signIn() {
      this.nowTime = this.getNowTime()
      // console.log(this.nowTime)
      var addObj = [{
        "signDate": this.nowTime,
        "signUser": this.nam,
        "instDate": new Date()
      }]
      this.$axios.post('http://127.0.0.1:3000/api/addSign', addObj).then(res => {
        if (res.data.status == "success") {
          this.$destoryGet()
          setTimeout(() => {
            this.setSwitch(13)
            // this.$message({
            //   message: '签到成功',
            //   type: 'success',
            //   showClose: true,
            //   offset: '75'
            // })
          }, 2000)
          // this.setSwitch(13)
          this.$message({
            message: '签到成功',
            type: 'success',
            showClose: true,
            offset: '75'
          })
        } else {
          this.$message({
            message: '签到失败',
            type: 'error',
            showClose: true,
            offset: '75'
          })
        }
      })
    },
    defSwitch() {
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        this.$root.devOth.aminStae = (this.$root.devOth.aminStae) ? 0 : 1
        this.setSwitch(9)
      }, 2000)
      // this.$root.devOth.aminStae = (this.$root.devOth.aminStae) ? 0 : 1
      // this.setSwitch(9)
      // this.$root.devOth.aminStae = (this.$root.devOth.aminStae) ? 0 : 1
    },
    maSwitch() {
      // console.log("TEST")
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        if (this.$root.devOth.maauStae == 1) {
          this.$root.devOth.maauStae = 0
          this.setSwitch(80)
        } else {
          this.$root.devOth.maauStae = 1
          this.setSwitch(81)
        }
      }, 2000)
    },
    fanSwitch() {
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        if (this.$root.devOth.fansTate == 0) {
          this.setSwitch(1)
        } else {
          this.setSwitch(0)
        }
      }, 1000)
    },
    sffSwitch() {
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        if (this.$root.devOth.sffAnste == 0) {
          this.setSwitch(3)
        } else {
          this.setSwitch(2)
        }
      }, 1000)
    },
    dehSwitch() {
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        if (this.$root.devOth.dehuStae == 0) {
          this.setSwitch(5)
        } else {
          this.setSwitch(4)
        }
      }, 1000)
    },
    pumSwich() {
      this.$destoryGet()
      this.$message({
        message: '切换中...',
        type: 'warning',
        showClose: true,
        offset: '75'
      })
      setTimeout(() => {
        if (this.$root.devOth.pumpStae == 0) {
          this.setSwitch(7)
        } else {
          this.setSwitch(6)
        }
      }, 1000)
    }
    // getTEST() {
    //   console.log(this)
    //   this.$destoryGet()
    // }
  },
  // destroyed: function() {
  //   clearInterval(this.timer)
  // }
}
</script>

<style lang="stylus" scoped>
.env-mon
  margin-top 4%

.clearfix:before,
  .clearfix:after
    display table
    content ""

.clearfix:after
  clear both

.card-header
  font-size 18px

.text
  font-size 16px

.item-title
  font-weight  bold

.item-value
  color #303133

.el-icon-success
  color #67C23A

.el-icon-error
  color #F56C6C
</style>
