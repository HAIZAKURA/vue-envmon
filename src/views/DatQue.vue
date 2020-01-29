<template>
  <div class="data">
    <div id="dataCard">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card" id="trans-box">
            <div id="cfgTransfer">
              <el-transfer
                v-model="value"
                :data="cfgData"
                :titles="['记录参数', '已选参数']"
              ></el-transfer>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div id="datePicker">
              <div id="picker">
                <p>查询时间范围</p>
                <el-date-picker
                  v-model="dateValue"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="center"
                  format="yyyy-M-d HH:mm"
                  value-format="yyyy-M-d HH:mm"
                  :default-time="['12:00:00', '12:00:00']"
                  :picker-options="pickerOptions"
                >
                </el-date-picker>
              </div>
            </div>
            <el-divider></el-divider>
            <el-row :gutter="20">
              <el-col :span="6" :offset="6">
                <el-button type="primary" @click="showDateValue()" style="width:100%;">开始查询</el-button>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="exportData()" style="width:100%;">导出数据</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row id="dataDiv">
        <el-col :span="24">
          <el-card class="box-card">
            <el-table
              :data="queData"
              style="width: 100%"
              border
              height="380"
            >
              <template v-for="(item, index) in tableValue">
                <el-table-column
                  v-if="item == 'saveDate'"
                  :key="index"
                  :prop="item"
                  :label="cfgName[item]"
                  width="200"
                  fixed
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  v-else
                  :key="index"
                  :prop="item"
                  :label="cfgName[item]"
                  width="240"
                  align="center"
                >
                </el-table-column>
              </template>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsrMgr',
  components: {
  },
  data() {
    // const generateData = () => {
    //   const cfg = [];
    //   for (let i = 1; i <= 15; i++) {
    //     cfg.push({
    //       key: i,
    //       label: `备选项 ${ i }`,
    //       disabled: i % 4 === 0
    //     });
    //   }
    //   return cfg;
    // };
    return {
      cfgData: [],
      cfgName: {
        "wait": "等待查询",
        "saveDate": "记录时间",
        "resiCurr": "火灾剩余电流（A）",
        "leakCurr": "避雷器泄漏电流（mA）",
        "thunStri": "雷击次数（PCS）",
        "sftrOnee": "SF6变送器1号位（PPm）",
        "sftrTwoo": "SF6变送器2号位（PPm）",
        "sftrThre": "SF6变送器3号位（PPm）",
        "sftrFour": "SF6变送器4号位（PPm）",
        "tempOnee": "环境温度1（℃）",
        "humdOnee": "环境湿度1（%）",
        "tempTwoo": "环境温度2（℃）",
        "humdTwoo": "环境湿度2（%）",
        "tempThre": "环境温度3（℃）",
        "humdThre": "环境湿度3（%）",
        "wtlvOnee": "一号水位值（mm）",
        "wtlvTwoo": "二号水位值（mm）",
        "wtlvThre": "三号水位值（mm）",
        "wtlvFour": "四号水位值（mm）",
        "wtlvFive": "五号水位值（mm）",
        "oxtrOnee": "O3变送器1号位（PPm）",
        "oxtrTwoo": "O3变送器2号位（PPm）",
        "oxtrThre": "O3变送器3号位（PPm）",
        "oxtrFour": "O3变送器4号位（PPm）",
        "trasApha": "变压器A相温度（℃）",
        "trasBpha": "变压器B相温度（℃）",
        "trasCpha": "变压器C相温度（℃）",
        "bbarAtem": "母排A相温度（℃）",
        "bbarBtem": "母排B相温度（℃）",
        "bbarCtem": "母排C相温度（℃）",
        "tratCurr": "变压器总电流（A）",
        "traoVolt": "变压器输出电压（V）",
        "traoFreq": "变压器输出频率（HZ）",
        "traoPfcc": "变压器功率因数",
        "trasPwhb": "变压器输出总有功电度（KWH）",
        "upsoVolt": "UPS输出电压（V）",
        "upsoCurr": "UPS输出电流（A）",
        "upsoFreq": "UPS输出频率（HZ）",
        "upsoPowe": "UPS输出功率（KW）",
        "upsoLoad": "UPS负荷率（%）",
        "upsbTemp": "UPS电池温度（℃）",
        "upsbVolt": "UPS电池电压（V）",
        "upsfCode": "UPS故障码"
      },
      value: ['saveDate'],
      tableValue: ['wait'],
      nameValue: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
          //设置不可点击时间为今天之后的时间
        }
      },
      dateValue: '',
      queData: [{}]
    }
  },
  mounted: function() {
    for (var getKey in this.$root.devStatus) {
      // console.log(getKey)
      this.cfgData.push({
        key: getKey,
        // label: getKey
        label: this.cfgName[getKey]
      })
    }
  },
  methods: {
    TEST() {
      // console.log(this.value)
      for (var i in this.value) {
        // console.log(this.value[i])
        this.nameValue.push(this.cfgName[this.value[i]])
      }
      // console.log(this.nameValue)
      // console.log(this.dateValue)
    },
    showDateValue() {
      // console.log(this.dateValue)
      this.tableValue = ''
      this.$axios.get('http://127.0.0.1:3000/api/queryData/' + this.dateValue[0] + '/' + this.dateValue[1])
      .then(res => {
        this.queData = res.data
        this.tableValue = this.value
      })
    },
    getNowTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      let time = yy+'-'+mm+'-'+dd+'-'+hh+'-'+mf+'-'+ss;
      return time
    },
    exportData() {
      var exData = JSON.parse(JSON.stringify(this.queData, this.tableValue))
      var exName = []
      var exWidth = []
      for (var key in exData[0]) {
        exName.push(this.cfgName[key])
        exWidth.push(8)
      }
      // console.log(exName)
      // console.log(exData)
      const ExportJsonExcel = require('js-export-excel')
      var option={};
      let time = this.getNowTime()
      option.fileName = 'QueDat_' + time
      option.datas=[
        {
          sheetData: exData,
          sheetHeader: exName,
          columnWidths: exWidth
        }
      ];
      var toExcel = new ExportJsonExcel(option); //new
      toExcel.saveExcel(); //保存
    }
  }
}
</script>

<style lang="stylus" scoped>
#trans-box
  text-align center

#cfgTransfer
  width 590px
  margin 0 auto
  text-align left
  height 289px

#datePicker
  height 150px

#picker
  margin 50px auto
  width 100%

#dataDiv
  margin-top 20px
</style>
