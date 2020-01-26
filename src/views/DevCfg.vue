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
                        <template slot="prepend">温度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fanbAtem">
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
                        <template slot="prepend">湿度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.fanbAhum">
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
                        <template slot="prepend">湿度</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.dehuBavl">
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
                        <template slot="prepend">水位</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="$root.devCfg.pumpBavl">
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
                    <template slot="append">Min</template>
                  </el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">SF<smal>6</smal>强排时间</span>
                  <br /><br />
                  <el-input v-model="$root.devCfg.sfvtTime">
                    <template slot="append">Min</template>
                  </el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">开门触发时间</span>
                  <br /><br />
                  <el-input v-model="$root.devCfg.doopTime">
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
                </el-col>
                <el-col :span="2">
                  <span class="item-title">环境湿度上限</span>
                  <p class="unit">&#37;</p>
                  <el-input v-model="$root.devCfg.humdUplt"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">紧急水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.urgeWtlv"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">警戒水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.alamWtlv"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">预警水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.warnWtlv"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">浸水水位上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.soakWtlv"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">O<small>3</small>浓度上限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.oxtrUplm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">O<small>3</small>浓度下限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.oxtrDnlm"></el-input>
                </el-col>
                <el-col :span="2">
                  <span class="item-title">SF<small>6</small>浓度上限</span>
                  <p class="unit">PPm</p>
                  <el-input v-model="$root.devCfg.sfupLimt"></el-input>
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
                </el-col>
                <el-col :span="2">
                  <span class="item-title">母排温度上限</span>
                  <p class="unit">&#37;</p>
                  <el-input v-model="$root.devCfg.butmUplm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电流上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.trcuUplm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电压上限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.trvoUplm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">变压器电压下限</span>
                  <p class="unit">mm</p>
                  <el-input v-model="$root.devCfg.trvoDnlm"></el-input>
                </el-col>
                <el-col :span="2">
                  <span class="item-title">功率因数下限</span>
                  <p class="unit" style="color:#FFFFFF;">trpfDnlm</p>
                  <el-input v-model="$root.devCfg.trpfDnlm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">火灾剩余电流上限</span>
                  <p class="unit">mA</p>
                  <el-input v-model="$root.devCfg.resiUplm"></el-input>
                </el-col>
                <el-col :span="3">
                  <span class="item-title">避雷泄露电流上限</span>
                  <p class="unit">mA</p>
                  <el-input v-model="$root.devCfg.leakUplm"></el-input>
                </el-col>
                <el-col :span="2">
                  <span class="item-title">雷击次数上限</span>
                  <p class="unit">PCS</p>
                  <el-input v-model="$root.devCfg.thunUplm"></el-input>
                </el-col>
              </el-row>
            </div>
          </el-card>

        </el-col>
      </el-row>
    </div>
    <el-button id="saveBtn" type="success">保存参数</el-button>
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
      secsPtim: this.$root.devCfg.secsPhou + ':' + this.$root.devCfg.secsPmin
    }
  },
  methods: {
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
  top 90px
</style>
