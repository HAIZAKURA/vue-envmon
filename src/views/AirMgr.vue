<template>
  <div class="air">
    <div id="airMgrCard">
      <el-row>
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>空调遥控器</span>
            </div>
            <div>
              <el-form ref="airForm" :label-position="left" label-width="60px">
                <el-row :gutter="4">
                  <el-col :span="12">
                    <el-form-item label="串口号">
                      <el-select v-model="port" placeholder="请选择">
                        <el-option
                          v-for="item in serialPorts"
                          :key="item.value"
                          :label="item.port"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="波特率">
                      <el-select v-model="rate" placeholder="请选择">
                        <el-option
                          v-for="item in baudRates"
                          :key="item.value"
                          :label="item.port"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="数据位">
                      <el-select v-model="bit" placeholder="请选择">
                        <el-option
                          v-for="item in dataBits"
                          :key="item.value"
                          :label="item.port"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="停止位">
                      <el-select v-model="stop" placeholder="请选择">
                        <el-option
                          v-for="item in stopBits"
                          :key="item.value"
                          :label="item.port"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="校验型">
                      <el-select v-model="check" placeholder="请选择" style="width:100%">
                        <el-option
                          v-for="item in checkTypes"
                          :key="item.value"
                          :label="item.port"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="设备名">
                      <el-input type="text" v-model="name" placeholder="请输入" @focus="show" data-layout="normal"></el-input>
                    </el-form-item>
                    <el-form-item label="设备址">
                      <el-input type="text" v-model="addr" placeholder="请输入" @focus="show" data-layout="normal"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="TEST()">进入设备</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- <el-form-item>
                  <el-input type="text" v-model="LoginForm.username" placeholder="用户名" @focus="show" data-layout="normal"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="LoginForm.password" placeholder="密码" @focus="show" data-layout="normal" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="loginSubmit">登录</el-button>
                </el-form-item> -->
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AirMgr',
  components: {
  },
  data() {
    return {
      serialPorts: [
        {
          value: '1',
          port: '串口1'
        },
        {
          value: '2',
          port: '串口2'
        }
      ],
      port: ''
    }
  },
  methods: {
    TEST() {
      let exec = require('child_process').exec;
      exec('C:\\air.lnk')
    }
  }
}
</script>

<style lang="stylus" scoped>
#airMgrCard
  margin-top 10%
</style>
