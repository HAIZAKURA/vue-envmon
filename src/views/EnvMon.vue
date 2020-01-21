<template>
  <div class="env-mon">
    <el-row :gutter="20">
      <el-col :span="12">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">环境温湿度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4">
                <span class="item-title">温度一</span>
                <p class="item-value">{{ EnvMonData.val_1_1 }}&nbsp;<small>&#176;C</small></p>
                <p v-if="EnvMonData.val_1_1 > 40"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">温度二</span>
                <p class="item-value">{{ EnvMonData.val_1_2 }}&nbsp;<small>&#176;C</small></p>
                <p v-if="EnvMonData.val_1_2 > 40"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">温度三</span>
                <p class="item-value">{{ EnvMonData.val_1_3 }}&nbsp;<small>&#176;C</small></p>
                <p v-if="EnvMonData.val_1_3 > 40"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">湿度一</span>
                <p class="item-value">{{ EnvMonData.val_1_4 }}&nbsp;<small>&#37;</small></p>
                <p v-if="EnvMonData.val_1_4 > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">湿度二</span>
                <p class="item-value">{{ EnvMonData.val_1_5 }}&nbsp;<small>&#37;</small></p>
                <p v-if="EnvMonData.val_1_5 > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4">
                <span class="item-title">湿度三</span>
                <p class="item-value">{{ EnvMonData.val_1_6 }}&nbsp;<small>&#37;</small></p>
                <p v-if="EnvMonData.val_1_6 > 80"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">SF<sub>6</sub>&nbsp;浓度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">浓度一</span>
                <p class="item-value">{{ EnvMonData.val_2_1 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_2_1 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度二</span>
                <p class="item-value">{{ EnvMonData.val_2_2 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_2_2 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度三</span>
                <p class="item-value">{{ EnvMonData.val_2_3 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_2_3 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度四</span>
                <p class="item-value">{{ EnvMonData.val_2_4 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_2_4 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">设备控制</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">排风机</span>
                <p>
                  <el-switch
                    v-model="EnvMonStatus.fan"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">SF<sub>6</sub>风机</span>
                <p>
                  <el-switch
                    v-model="EnvMonStatus.sf_fan"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">除湿机</span>
                <p>
                  <el-switch
                    v-model="EnvMonStatus.dehum"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">抽水泵</span>
                <p>
                  <el-switch
                    v-model="EnvMonStatus.pump"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </p>
              </el-col>
            </el-row>
          </div>
        </el-card>

      </el-col>
      <el-col :span="12">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">电缆沟水位</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="4">
                <span class="item-title">一号点</span>
                <p class="item-value">{{ EnvMonData.val_3_1 }}&nbsp;<small>mm</small></p>
                <p v-if="EnvMonData.val_3_1 > 100"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1">
                <span class="item-title">二号点</span>
                <p class="item-value">{{ EnvMonData.val_3_2 }}&nbsp;<small>mm</small></p>
                <p v-if="EnvMonData.val_3_2 > 100"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1">
                <span class="item-title">三号点</span>
                <p class="item-value">{{ EnvMonData.val_3_3 }}&nbsp;<small>mm</small></p>
                <p v-if="EnvMonData.val_3_3 > 100"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1">
                <span class="item-title">四号点</span>
                <p class="item-value">{{ EnvMonData.val_3_4 }}&nbsp;<small>mm</small></p>
                <p v-if="EnvMonData.val_3_4 > 100"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="4" :offset="1">
                <span class="item-title">五号点</span>
                <p class="item-value">{{ EnvMonData.val_3_5 }}&nbsp;<small>mm</small></p>
                <p v-if="EnvMonData.val_3_5 > 100"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">O<sub>3</sub>&nbsp;浓度</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <span class="item-title">浓度一</span>
                <p class="item-value">{{ EnvMonData.val_4_1 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_4_1 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度二</span>
                <p class="item-value">{{ EnvMonData.val_4_2 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_4_2 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度三</span>
                <p class="item-value">{{ EnvMonData.val_4_3 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_4_3 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">浓度四</span>
                <p class="item-value">{{ EnvMonData.val_4_4 }}&nbsp;<small>PPm</small></p>
                <p v-if="EnvMonData.val_4_4 > 20"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <br /><br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="card-header">状态切换及巡查签到</span>
          </div>
          <div class="text item">
            <el-row :gutter="2">
              <el-col :span="6">
                <p v-if="!EnvMonStatus.man_auto"><el-button type="danger" @click="maSwitch()">M&nbsp;A&nbsp;N</el-button></p>
                <p v-else><el-button type="success" @click="maSwitch()">AUTO</el-button></p>
              </el-col>
              <el-col :span="6">
                <p>
                  <el-button @click="defSwitch()">布撤防切换</el-button>
                </p>
              </el-col>
              <el-col :span="6">
                <span class="item-title">布防状态</span>
                <p v-if="!EnvMonStatus.def"><i class="el-icon-error" /></p>
                <p v-else><i class="el-icon-success" /></p>
              </el-col>
              <el-col :span="6">
                <p>
                  <el-button type="danger">签到</el-button>
                </p>
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
  name: 'EnvMon',
  components: {
  },
  data() {
    return {
      EnvMonData: {
        val_1_1: '23.2',
        val_1_2: '24.1',
        val_1_3: '22.7',
        val_1_4: '65.2',
        val_1_5: '68.3',
        val_1_6: '85.2',
        val_2_1: '2',
        val_2_2: '10',
        val_2_3: '4',
        val_2_4: '0',
        val_3_1: '56',
        val_3_2: '38',
        val_3_3: '102',
        val_3_4: '23',
        val_3_5: '214',
        val_4_1: '0.0',
        val_4_2: '0.1',
        val_4_3: '0.0',
        val_4_4: '0.2',
      },
      EnvMonStatus: {
        fan: true,
        sf_fan: false,
        dehum: true,
        pump: false,
        man_auto: true,
        def: false,
      }
    }
  },
  methods: {
    maSwitch() {
      this.EnvMonStatus.man_auto = !this.EnvMonStatus.man_auto
    },
    defSwitch() {
      this.EnvMonStatus.def = !this.EnvMonStatus.def
    }
  }
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
