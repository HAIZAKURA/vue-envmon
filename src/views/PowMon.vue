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
                <p class="item-value">{{ PowMonData.transA }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.transA > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">变压器B相</span>
                <p class="item-value">{{ PowMonData.transB }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.transB > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">变压器C相</span>
                <p class="item-value">{{ PowMonData.transC }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.transC > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排A相</span>
                <p class="item-value">{{ PowMonData.busA }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.busA > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排B相</span>
                <p class="item-value">{{ PowMonData.busB }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.busB > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">母排C相</span>
                <p class="item-value">{{ PowMonData.busC }}&nbsp;<small>&#176;C</small></p>
                <p v-if="PowMonData.busC > 80"><i class="el-icon-error" /></p>
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
                <p v-if="!PowMonStatus.ats"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">HP电源</span>
                <p class="item-value hide">HP</p>
                <p v-if="!PowMonStatus.hp"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">FP电源</span>
                <p class="item-value hide">FP</p>
                <p v-if="!PowMonStatus.fp"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">DTU电源</span>
                <p class="item-value hide">DTU</p>
                <p v-if="!PowMonStatus.dtu"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">非法入侵</span>
                <p class="item-value hide">Invade</p>
                <p v-if="!PowMonStatus.invade"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">烟雾报警</span>
                <p class="item-value hide">Smoke</p>
                <p v-if="!PowMonStatus.smoke"><i class="el-icon-error" /></p>
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
                <p class="item-value">{{ PowMonData.upsV }}&nbsp;<small>V</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电流</span>
                <p class="item-value">{{ PowMonData.upsI }}&nbsp;<small>A</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">频率</span>
                <p class="item-value">{{ PowMonData.upsF }}&nbsp;<small>Hz</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">功率</span>
                <p class="item-value">{{ PowMonData.upsP }}&nbsp;<small>KW</small></p>
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
                <p class="item-value">{{ PowMonData.transI }}&nbsp;<small>A</small></p>
                <p v-if="PowMonData.transI > 800"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">电压</span>
                <p class="item-value">{{ PowMonData.transV }}&nbsp;<small>V</small></p>
                <p v-if="PowMonData.transV > 400"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">频率</span>
                <p class="item-value">{{ PowMonData.transF }}&nbsp;<small>Hz</small></p>
                <p v-if="PowMonData.transF > 50"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">功率因数</span>
                <p class="item-value">{{ PowMonData.powF }}</p>
                <p v-if="PowMonData.powF > 0.5"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">有功电度</span>
                <p class="item-value">{{ PowMonData.actE }}&nbsp;<small>KWH</small></p>
                <p v-if="PowMonData.actE > 1000"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">剩余电流</span>
                <p class="item-value">{{ PowMonData.resI }}&nbsp;<small>mA</small></p>
                <p v-if="PowMonData.resI > 0.1"><i class="el-icon-error" /></p>
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
                <p class="item-value">{{ PowMonData.leakI }}&nbsp;<small>mA</small></p>
                <p v-if="PowMonData.leakI > 1"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">雷击次数</span>
                <p class="item-value">{{ PowMonData.stkNum }}&nbsp;<small>PCS</small></p>
                <p v-if="PowMonData.stkNum > 10"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">SPD&nbsp;脱扣</span>
                <p class="item-value hide">SPD</p>
                <p v-if="!PowMonStatus.spd"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">SCB&nbsp;状态</span>
                <p class="item-value hide">SCB</p>
                <p v-if="!PowMonStatus.scb"><i class="el-icon-error" /></p>
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
                <p class="item-value">{{ PowMonData.upsLd }}&nbsp;<small>&#37;</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电池温度</span>
                <p class="item-value">{{ PowMonData.batT }}&nbsp;<small>&#176;C</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">电池电压</span>
                <p class="item-value">{{ PowMonData.batV }}&nbsp;<small>V</small></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">故障码</span>
                <p class="item-value" style="color:red;">{{ PowMonData.error }}</p>
              </el-col>
            </el-row>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PowMon',
  components: {
  },
  data() {
    return {
      PowMonData: {
        transA: '57.2',
        transB: '56.9',
        transC: '58.4',
        busA: '48.3',
        busB: '45.2',
        busC: '44.6',
        upsV: '387.1',
        upsI: '755.2',
        upsF: '49.9',
        upsP: '0.8',
        transI: '755.2',
        transV: '387.1',
        transF: '49.9',
        powF: '0.82',
        actE: '994.3',
        resI: '0.6',
        leakI: '0.02',
        stkNum: '1',
        upsLd: '47.2',
        batT: '37.8',
        batV: '73.6',
        error: '002',
      },
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
