<template>
  <div class="user">
    <div id="accCard">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card">
            <div id="accTable">
              <el-table
                :data="accData"
                height="500"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="card"
                  label="卡号"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="dep"
                  label="部门"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="job"
                  label="职务"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <br />
              <el-row :gutter="2">
                <el-col :span="8">
                  <el-button type="primary">增加</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary">删除</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary">修改</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div id="recTable">
              <el-table
                :data="accRec"
                height="500"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="card"
                  label="卡号"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="刷卡进入时间"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <br />
              <el-row :gutter="2">
                <el-col :span="10">
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
                </el-col>
                <el-col :span="4" :offset="7">
                  <el-button type="primary">查询</el-button>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary">导出</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccMgr',
  components: {
  },
  data() {
    return {
      accData: [
        {
          card: '10001',
          name: 'name1',
          dep: 'dep1',
          job: '7',
        },
        {
          card: '10002',
          name: 'name2',
          dep: 'dep2',
          job: '7',
        },
        {
          card: '10003',
          name: 'name3',
          dep: 'dep3',
          job: '7',
        },
        {
          card: '10004',
          name: 'name4',
          dep: 'dep4',
          job: '7',
        },
        {
          card: '10005',
          name: 'name5',
          dep: 'dep5',
          job: '7',
        },
        {
          card: '10006',
          name: 'name6',
          dep: 'dep6',
          job: '7',
        },
        {
          card: '10007',
          name: 'name7',
          dep: 'dep7',
          job: '7',
        },
        {
          card: '10008',
          name: 'name8',
          dep: 'dep8',
          job: '7',
        },
        {
          card: '10009',
          name: 'name9',
          dep: 'dep9',
          job: '7',
        },
        {
          card: '10010',
          name: 'name10',
          dep: 'dep10',
          job: '7',
        }
      ],
      accRec: [
        {
          card: '10001',
          name: 'name1',
          date: '2020-01-01'
        }
      ]
    }
  },
  methods: {
    accept() {
      this.hide()
    },
    show(e) {
      this.input = e.target
      this.layout = e.target.dataset.layout
      if (!this.visible)
        this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
#accCard
  margin-top 4%
</style>
