<template>
  <div class="cfg">
    <div>
      <el-row :gutter="20">
        <el-col :span="24">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card-header">设备自动启停设置</span>
            </div>
            <div class="text item">
              <el-row :gutter="15">
                <el-col :span="6">
                  <span class="item-title">风机启动（温度&nbsp;&#176;C）</span>
                  <br /><br />
                  <el-row :gutter="5">
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fansTemp">
                      <!-- <el-input v-model="curDevCfg.fansTemp"> -->
                        <template slot="prepend">温度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fanbAtem">
                      <!-- <el-input v-model="curDevCfg.fanbAtem"> -->
                        <template slot="prepend">回差</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <span class="item-title">风机启动（湿度&nbsp;&#37;）</span>
                  <br /><br />
                  <el-row :gutter="5">
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fansThum">
                      <!-- <el-input v-model="curDevCfg.fansThum"> -->
                        <template slot="prepend">湿度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fanbAhum">
                      <!-- <el-input v-model="curDevCfg.fanbAhum"> -->
                        <template slot="prepend">回差</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <span class="item-title">除湿机启动（湿度&nbsp;&#37;）</span>
                  <br /><br />
                  <el-row :gutter="5">
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.dehuStvl">
                      <!-- <el-input v-model="curDevCfg.dehuStvl"> -->
                        <template slot="prepend">湿度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.dehuBavl">
                      <!-- <el-input v-model="curDevCfg.dehuBavl"> -->
                        <template slot="prepend">回差</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <span class="item-title">水泵启动（水位&nbsp;mm）</span>
                  <br /><br />
                  <el-row :gutter="5">
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.pumpStvl">
                      <!-- <el-input v-model="curDevCfg.pumpStvl"> -->
                        <template slot="prepend">水位</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.pumpBavl">
                      <!-- <el-input v-model="curDevCfg.pumpBavl"> -->
                        <template slot="prepend">回差</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <br />

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card-header">设备定时设置</span>
            </div>
            <div class="text item">
              <el-row :gutter="10">
                <el-col :span="4">
                  <span class="item-title">定时布防时间</span>
                  <br /><br />
                  <el-row>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="开始"
                        v-model="atamTime"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                    <el-col :span="2">
                      <div>
                        <span style="line-height:40px;height:40px">-</span>
                      </div>
                    </el-col>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="结束"
                        v-model="deamTime"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="4">
                  <span class="item-title">风机定时开启一</span>
                  <br /><br />
                  <el-row>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="开始"
                        v-model="firsTtim"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                    <el-col :span="2">
                      <div>
                        <span style="line-height:40px;height:40px">-</span>
                      </div>
                    </el-col>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="结束"
                        v-model="firsPtim"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="4">
                  <span class="item-title">风机定时开启二</span>
                  <br /><br />
                  <el-row>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="开始"
                        v-model="secsTtim"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                    <el-col :span="2">
                      <div>
                        <span style="line-height:40px;height:40px">-</span>
                      </div>
                    </el-col>
                    <el-col :span="11">
                      <el-time-picker
                        placeholder="结束"
                        v-model="secsPtim"
                        format="HH:mm"
                        value-format="HH:mm"
                        style="width:100%"
                      >
                      </el-time-picker>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">通风时间</span>
                  <br /><br />
                  <el-input v-model="$root.devCfg.ventTime">
                  <!-- <el-input v-model="curDevCfg.ventTime"> -->
                    <template slot="append">Min</template>
                  </el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">SF<small>6</small>强排时间</span>
                  <br /><br />
                  <el-input v-model="$root.devCfg.sfvtTime">
                  <!-- <el-input v-model="curDevCfg.sfvtTime"> -->
                    <template slot="append">Min</template>
                  </el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">开门触发时间</span>
                  <br /><br />
                  <el-input v-model="$root.devCfg.doopTime">
                  <!-- <el-input v-model="curDevCfg.doopTime"> -->
                    <template slot="append">S</template>
                  </el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">数据记录间隔</span>
                  <br /><br />
                  <el-input v-model="$root.saveInterval">
                    <template slot="append">Min</template>
                  </el-input>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <br />

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card-header">环境测量限制</span>
            </div>
            <div class="text item">
              <el-row :gutter="15">
                <el-col :span="2">
                  <span class="item-title">环境温度上限</span>
                  <p class="unit">&#176;C</p>
                  <el-input v-model="$root.devCfg.tempUplt"></el-input>
                  <!-- <el-input v-model="curDevCfg.tempUplt"></el-input> -->
                </el-col>
                <el-col :span="2">
                  <span class="item-title">环境湿度上限</span>
                  <p class="unit">&#37;</p>
                  <el-input v-model="$root.devCfg.humdUplt"></el-input>
                  <!-- <el-input v-model="curDevCfg.humdUplt"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">紧急水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.urgeWtlv"></el-input>
                  <!-- <el-input v-model="curDevCfg.urgeWtlv"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">警戒水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.alamWtlv"></el-input>
                  <!-- <el-input v-model="curDevCfg.alamWtlv"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">预警水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.warnWtlv"></el-input>
                  <!-- <el-input v-model="curDevCfg.warnWtlv"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">浸水水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.soakWtlv"></el-input>
                  <!-- <el-input v-model="curDevCfg.soakWtlv"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">O<small>3</small>浓度上限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.oxtrUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.oxtrUplm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">O<small>3</small>浓度下限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.oxtrDnlm"></el-input>
                  <!-- <el-input v-model="curDevCfg.oxtrDnlm"></el-input> -->
                </el-col>
                <el-col :span="2">
                  <span class="item-title">SF<small>6</small>浓度上限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.sfupLimt"></el-input>
                  <!-- <el-input v-model="curDevCfg.sfupLimt"></el-input> -->
                </el-col>
              </el-row>
            </div>
          </el-card>

          <br />

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card-header">配电测量限制</span>
            </div>
            <div class="text item">
              <el-row :gutter="15">
                <el-col :span="3">
                  <span class="item-title">变压器温度上限</span>
                  <p class="unit">&#176;C</p>
                  <el-input v-model="$root.devCfg.trtmUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.trtmUplm"></el-input> -->
                </el-col>
                <el-col :span="2">
                  <span class="item-title">母排温度上限</span>
                  <p class="unit">&#176;C</p>
                  <el-input v-model="$root.devCfg.butmUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.butmUplm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电流上限</span>
                  <p class="unit">A</p>
                  <el-input v-model="$root.devCfg.trcuUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.trcuUplm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电压上限</span>
                  <p class="unit">V</p>
                  <el-input v-model="$root.devCfg.trvoUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.trvoUplm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电压下限</span>
                  <p class="unit">V</p>
                  <el-input v-model="$root.devCfg.trvoDnlm"></el-input>
                  <!-- <el-input v-model="curDevCfg.trvoDnlm"></el-input> -->
                </el-col>
                <el-col :span="2">
                  <span class="item-title">功率因数下限</span>
                  <p class="unit" style="color:#FFFFFF;">trpfDnlm</p>
                  <el-input v-model="$root.devCfg.trpfDnlm"></el-input>
                  <!-- <el-input v-model="curDevCfg.trpfDnlm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">火灾剩余电流上限</span>
                  <p class="unit">A</p>
                  <el-input v-model="$root.devCfg.resiUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.resiUplm"></el-input> -->
                </el-col>
                <el-col :span="3">
                  <span class="item-title">避雷泄露电流上限</span>
                  <p class="unit">mA</p>
                  <el-input v-model="$root.devCfg.leakUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.leakUplm"></el-input> -->
                </el-col>
                <el-col :span="2">
                  <span class="item-title">雷击次数上限</span>
                  <p class="unit">PCS</p>
                  <el-input v-model="$root.devCfg.thunUplm"></el-input>
                  <!-- <el-input v-model="curDevCfg.thunUplm"></el-input> -->
                </el-col>
              </el-row>
            </div>
          </el-card>

        </el-col>
      </el-row>
    </div>
    <!-- <el-button id="saveBtnA" type="success" @click="TESTFUNCA()">保存参数</el-button> -->
    <el-button id="saveBtn" type="success" @click="setDeivce()">保存参数</el-button>
  </div>
</template>

<script>
export default {
  name: 'DevCfg',
  components: {
  },
  data() {
    return {
      atamTime: this.$root.devCfg.atamHour + ':' + this.$root.devCfg.atamMinu,
      deamTime: this.$root.devCfg.deamHour + ':' + this.$root.devCfg.deamMinu,
      firsTtim: this.$root.devCfg.firsThou + ':' + this.$root.devCfg.firsTmin,
      firsPtim: this.$root.devCfg.firsPhou + ':' + this.$root.devCfg.firsPmin,
      secsTtim: this.$root.devCfg.secsThou + ':' + this.$root.devCfg.secsTmin,
      secsPtim: this.$root.devCfg.secsPhou + ':' + this.$root.devCfg.secsPmin,
      fullscreenLoading: false,
    }
  },
  methods: {
    fansTempLimit() {
      if (this.$root.devCfg.fansTemp > 50) {
        this.$root.devCfg.fansTemp = 50
      }
    },
    setDeivce() {
      this.$destorySave()
      this.$destoryGetInCfg()
      var atamTH = this.atamTime.match(/^[0-9]{1,2}/)
      var atamTM = this.atamTime.match(/[0-9]{1,2}$/)
      var deamTH = this.deamTime.match(/^[0-9]{1,2}/)
      var deamTM = this.deamTime.match(/[0-9]{1,2}$/)
      var firsTH = this.firsTtim.match(/^[0-9]{1,2}/)
      var firsTM = this.firsTtim.match(/[0-9]{1,2}$/)
      var firsPH = this.firsPtim.match(/^[0-9]{1,2}/)
      var firsPM = this.firsPtim.match(/[0-9]{1,2}$/)
      var secsTH = this.secsTtim.match(/^[0-9]{1,2}/)
      var secsTM = this.secsTtim.match(/[0-9]{1,2}$/)
      var secsPH = this.secsPtim.match(/^[0-9]{1,2}/)
      var secsPM = this.secsPtim.match(/[0-9]{1,2}$/)
      this.$root.devCfg.atamHour = parseInt(atamTH[0])
      this.$root.devCfg.atamMinu = parseInt(atamTM[0])
      this.$root.devCfg.deamHour = parseInt(deamTH[0])
      this.$root.devCfg.deamMinu = parseInt(deamTM[0])
      this.$root.devCfg.firsThou = parseInt(firsTH[0])
      this.$root.devCfg.firsTmin = parseInt(firsTM[0])
      this.$root.devCfg.firsPhou = parseInt(firsPH[0])
      this.$root.devCfg.firsPmin = parseInt(firsPM[0])
      this.$root.devCfg.secsThou = parseInt(secsTH[0])
      this.$root.devCfg.secsTmin = parseInt(secsTM[0])
      this.$root.devCfg.secsPhou = parseInt(secsPH[0])
      this.$root.devCfg.secsPmin = parseInt(secsPM[0])
      this.$root.devCfg.tempUplt *= 10
      this.$root.devCfg.humdUplt *= 10
      this.$root.devCfg.fansTemp *= 10
      this.$root.devCfg.fanbAtem *= 10
      this.$root.devCfg.fansThum *= 10
      this.$root.devCfg.fanbAhum *= 10
      this.$root.devCfg.dehuStvl *= 10
      this.$root.devCfg.dehuBavl *= 10
      this.$root.devCfg.resiUplm *= 100
      this.$root.devCfg.leakUplm *= 100
      this.$root.devCfg.oxtrUplm *= 10
      this.$root.devCfg.oxtrDnlm *= 10
      this.$root.devCfg.trtmUplm *= 10
      this.$root.devCfg.butmUplm *= 10
      this.$root.devCfg.trcuUplm *= 10
      this.$root.devCfg.trvoUplm *= 10
      this.$root.devCfg.trvoDnlm *= 10
      this.$root.devCfg.trpfDnlm *= 100
      for (var item in this.$root.devCfg) {
        this.$root.devCfg[item] = parseInt(this.$root.devCfg[item])
      }
      // TESTFUNCA()
      const loading = this.$loading({
        lock: true,
        text: '参数修改中...',
      })
      // console.log(this.$root.devCfg)
      this.$axios.post('http://localhost:5000/SetDevice', this.$root.devCfg)
      .then(res => {
        if (res.data == 'OK') {
          this.$axios.get('http://localhost:5000/GetCfg')
          .then(res => {
            this.$root.devCfg = res.data
            this.$createSave()
            this.$createGetInCfg()
          })
          loading.close()
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true,
            offset: '75'
          })
        } else {
          this.$axios.get('http://localhost:5000/GetCfg')
          .then(res => {
            this.$root.devCfg = res.data
            this.$createSave()
            this.$createGetInCfg()
          })
          loading.close()
          this.$message({
            message: '修改失败',
            type: 'error',
            showClose: true,
            offset: '75'
          })
        }
      })
      .catch(err => {
        this.$axios.get('http://localhost:5000/GetCfg')
        .then(res => {
          this.$root.devCfg = res.data
          this.$createSave()
          this.$createGetInCfg()
        })
        loading.close()
        this.$message({
          message: 'err',
          type: 'error',
          showClose: true,
          offset: '75'
        })
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.clearfix:before,
  .clearfix:after
    display table
    content ""

.clearfix:after
  clear both

.card-header
  font-size 18px
  line-height 10px

.text
  font-size 16px

.item-title
  font-weight  bold

.unit
  font-size 14px
  line-height 4px

#saveBtn
  position absolute
  right 40px
  top 100px

#saveBtnA
  position absolute
  right 140px
  top 90px
</style>
