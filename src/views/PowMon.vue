<template>
  <div class="pow-mon">
    <el-row :gutter="20">
      <el-col :span="12">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">配电设备温度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4">
                <span class="item-title">变压器A相</span>
                <p class="item-value">{{ $root.devStatus.trasApha }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.trasApha > $root.devCfg.trtmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">变压器B相</span>
                <p class="item-value">{{ $root.devStatus.trasBpha }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.trasBpha > $root.devCfg.trtmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">变压器C相</span>
                <p class="item-value">{{ $root.devStatus.trasCpha }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.trasCpha > $root.devCfg.trtmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排A相</span>
                <p class="item-value">{{ $root.devStatus.bbarAtem }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.bbarAtem > $root.devCfg.butmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排B相</span>
                <p class="item-value">{{ $root.devStatus.bbarBtem }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.bbarBtem > $root.devCfg.butmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排C相</span>
                <p class="item-value">{{ $root.devStatus.bbarCtem }}&nbsp;<small>&#176;C</small></p>
                <p v-if="$root.devStatus.bbarCtem > $root.devCfg.butmUplm"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">设备电源、防盗、火灾</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4">
                <span class="item-title">ATS电源</span>
                <p class="item-value hide">ATS</p>
                <p v-if="$root.devOth.atspAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">HP电源</span>
                <p class="item-value hide">HP</p>
                <p v-if="$root.devOth.hppwAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">FP电源</span>
                <p class="item-value hide">FP</p>
                <p v-if="$root.devOth.fppwAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">DTU电源</span>
                <p class="item-value hide">DTU</p>
                <p v-if="$root.devOth.dtupAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">非法入侵</span>
                <p class="item-value hide">Invade</p>
                <p v-if="$root.devOth.illeAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">烟雾报警</span>
                <p class="item-value hide">Smoke</p>
                <p v-if="$root.devOth.smokAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">UPS&nbsp;输出</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">电压</span>
                <p class="item-value">{{ $root.devStatus.upsoVolt }}&nbsp;<small>V</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电流</span>
                <p class="item-value">{{ $root.devStatus.upsoCurr }}&nbsp;<small>A</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">频率</span>
                <p class="item-value">{{ $root.devStatus.upsoFreq }}&nbsp;<small>Hz</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">功率</span>
                <p class="item-value">{{ $root.devStatus.upsoPowe }}&nbsp;<small>KW</small></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

      </el-col>
      <el-col :span="12">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">变压器输出</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4">
                <span class="item-title">电流</span>
                <p class="item-value">{{ $root.devStatus.tratCurr }}&nbsp;<small>A</small></p>
                <p v-if="$root.devOth.trcuAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">电压</span>
                <p class="item-value">{{ $root.devStatus.traoVolt }}&nbsp;<small>V</small></p>
                <p v-if="$root.devOth.trvlAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">频率</span>
                <p class="item-value">{{ $root.devStatus.traoFreq }}&nbsp;<small>Hz</small></p>
                <p><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">功率因数</span>
                <p class="item-value">{{ $root.devStatus.traoPfcc }}</p>
                <p v-if="$root.devOth.trpfAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">有功电度</span>
                <p class="item-value">{{ $root.devStatus.trasPwhb }}&nbsp;<small>KWH</small></p>
                <p><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">剩余电流</span>
                <p class="item-value">{{ $root.devStatus.resiCurr }}&nbsp;<small>A</small></p>
                <p v-if="$root.devOth.resiAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">避雷装置</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">泄漏电流</span>
                <p class="item-value">{{ $root.devStatus.leakCurr }}&nbsp;<small>mA</small></p>
                <p v-if="$root.devOth.leakAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">雷击次数</span>
                <p class="item-value">{{ $root.devStatus.thunStri }}&nbsp;<small>PCS</small></p>
                <p v-if="$root.devOth.thovAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">SPD&nbsp;脱扣</span>
                <p class="item-value hide">SPD</p>
                <p v-if="$root.devOth.spdhAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">SCB&nbsp;状态</span>
                <p class="item-value hide">SCB</p>
                <p v-if="$root.devOth.scbpAlam"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">UPS&nbsp;其他状态</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">负荷率</span>
                <p class="item-value">{{ $root.devStatus.upsoLoad }}&nbsp;<small>&#37;</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电池温度</span>
                <p class="item-value">{{ $root.devStatus.upsbTemp }}&nbsp;<small>&#176;C</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电池电压</span>
                <p class="item-value">{{ $root.devStatus.upsbVolt }}&nbsp;<small>V</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">故障码</span>
                <p class="item-value" style="color:red;">{{ $root.devStatus.upsfCode }}</p>
              </el-col>
            </el-row>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
// import GLOBAL from '@/api/global_variable'

export default {
  name: 'PowMon',
  components: {
  },
  data() {
    return {
      // DevStatus: GLOBAL.DevStatus,
      PowMonStatus: {
        ats: true,
        hp: false,
        fp: true,
        dtu: false,
        invade: true,
        smoke: false,
        spd: true,
        scb: true,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.pow-mon
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

.hide
  color #FFFFFF
</style>
