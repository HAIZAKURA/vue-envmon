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
                  :default-time="['12:00:00', '12:00:00']"
                >
                </el-date-picker>
              </div>
            </div>
            <el-divider></el-divider>
            <el-row>
              <el-col :span="8" :offset="8">
                <el-button type="primary">开始查询</el-button>
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
              height="240">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="cfg01"
                label="参数一"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg02"
                label="参数二"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg03"
                label="参数三"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg04"
                label="参数四"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg05"
                label="参数五"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg06"
                label="参数六"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg07"
                label="参数七"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg08"
                label="参数八"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg09"
                label="参数九"
                width="120">
              </el-table-column>
              <el-table-column
                prop="cfg10"
                label="参数十"
                width="120">
              </el-table-column>
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
    const generateData = () => {
      const cfg = [];
      for (let i = 1; i <= 15; i++) {
        cfg.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return cfg;
    };
    return {
      cfgData: generateData(),
      value: [1, 4],
      dateValue: '',
      queData: [
        {
          date: '2020-01-01',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        },
        {
          date: '2020-01-02',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        },
        {
          date: '2020-01-03',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        },
        {
          date: '2020-01-04',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        },
        {
          date: '2020-01-05',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        },
        {
          date: '2020-01-06',
          cfg01: 'cfg01',
          cfg02: 'cfg02',
          cfg03: 'cfg03',
          cfg04: 'cfg04',
          cfg05: 'cfg05',
          cfg06: 'cfg06',
          cfg07: 'cfg07',
          cfg08: 'cfg08',
          cfg09: 'cfg09',
          cfg10: 'cfg10'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
#trans-box
  text-align center

#cfgTransfer
  width 600px
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
