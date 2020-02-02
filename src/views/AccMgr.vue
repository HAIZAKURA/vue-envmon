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
                  prop="cardIdno"
                  label="卡号"
                  width="200"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="cardName"
                  label="姓名"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="cardDept"
                  label="部门"
                  width="150"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="cardPowr"
                  label="职务"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <br />
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-button type="primary" style="width:100%;" @click="dialogAddAcc = true">增加</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" style="width:100%;" @click="dialogDelAcc = true">删除</el-button>
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
                  prop="cardRccIdno"
                  label="卡号"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="cardRccName"
                  label="姓名"
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="cardRccTime"
                  label="刷卡进入时间"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <br />
              <el-row :gutter="20">
                <el-col :span="10">
                  <el-date-picker
                    v-model="dateValue"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="center"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    :default-time="['00:00:00', '23:59:59']"
                  >
                  </el-date-picker>
                </el-col>
                <el-col :span="4" :offset="6">
                  <el-button type="primary" style="width:100%;" @click="reqQueryCardRcc()">查询</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button type="primary" style="width:100%;" @click="exportRcc()">导出</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!--增加门禁-->
    <el-dialog
      title="增加门禁"
      :visible.sync="dialogAddAcc"
      width="40%"
      center
    >
      <el-form :model="addForm" ref="addForm">
        <el-form-item label="卡号" :label-width="formLabelWidth" prop="cardIdno">
          <el-input v-model="addForm.cardIdno" autocomplete="off" autofocus>
            <el-button slot="append" @click="getCardId()">获取卡号</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="cardName">
          <el-input v-model="addForm.cardName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth" prop="cardDept">
          <el-input v-model="addForm.cardDept" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职务" :label-width="formLabelWidth" prop="cardPowr">
          <el-input v-model="addForm.cardPowr" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddAcc = false">取 消</el-button>
        <el-button type="primary" @click="addCard()">确 定</el-button>
      </div>
    </el-dialog>
    <!--删除门禁-->
    <el-dialog
      title="删除门禁"
      :visible.sync="dialogDelAcc"
      width="40%"
      center
    >
      <el-form :model="delForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-select v-model="delForm.cardId" placeholder="请选择要删除的用户" style="width:100%">
            <el-option
              v-for="item in accData"
              :key="item._id"
              :label="item.cardName"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDelAcc = false">取 消</el-button>
        <el-button type="primary" @click="delCard()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AccMgr',
  components: {
  },
  data() {
    return {
      accData: [{}],
      accRec: [{}],
      addForm: {
        cardIdno: '',
        cardName: '',
        cardDept: '',
        cardPowr: ''
      },
      delForm: {
        cardId: ''
      },
      dialogAddAcc: false,
      dialogDelAcc: false,
      formLabelWidth: '40px',
      dateValue: ''
    }
  },
  mounted: function() {
    this.queryCard()
    this.queryCardRcc()
  },
  methods: {
    TEST() {
      // console.log(this.dateValue[0])
      // console.log(this.dateValue[1])
    },
    hex2int(hex) {
      var len = hex.length, a = new Array(len), code;
      for (var i = 0; i < len; i++) {
        code = hex.charCodeAt(i);
        if (48<=code && code < 58) {
          code -= 48;
        } else {
          code = (code & 0xdf) - 65 + 10;
        }
        a[i] = code;
      }
      return a.reduce(function(acc, c) {
        acc = 16 * acc + c;
        return acc;
      }, 0);
    },
    getCardId() {
      this.$message({
        message: '请在10秒内刷读门禁卡',
        type: 'warning',
        showClose: true
      })
      this.$axios.get("http://127.0.0.1:5000/getCard", {timeout: 10000})
      .then(res => {
        // console.log(res.data)
        this.addForm.cardIdno = this.hex2int(res.data)
        this.$message({
          message: '获取成功',
          type: 'success',
          showClose: true
        })
      })
      .catch(() => {
        this.$message({
          message: '获取超时请重试',
          type: 'error',
          showClose: true,
          offset: '75'
        })
      })
    },
    queryCard() {
      this.$axios.get('http://127.0.0.1:3000/api/card').then(res => (this.accData = res.data))
    },
    clearAddForm() {
      this.addForm.cardIdno = ''
      this.addForm.cardName = ''
      this.addForm.cardDept = ''
      this.addForm.cardPowr = ''
    },
    addCard() {
      var addFlag = 1
      var addObj = this.addForm
      for (var i = 0, len = this.accData.length; i < len; i++) {
        if (this.accData[i].cardIdno == this.addForm.cardIdno) {
          this.$message({
            message: '门禁卡已存在',
            type: 'warning',
            showClose: true,
            offset: '75'
          })
          this.clearAddForm()
          this.dialogAddAcc = false
          addFlag = 0
          this.queryCard()
          break
        } else if (this.accData[i].cardName == this.addForm.cardName) {
          this.$message({
            message: '用户已存在',
            type: 'warning',
            showClose: true,
            offset: '75'
          })
          this.clearAddForm()
          this.dialogAddAcc = false
          addFlag = 0
          this.queryCard()
          break
        }
      }
      if (addFlag === 1) {
        this.$axios.post('http://127.0.0.1:3000/api/addCard', addObj).then(res => {
          if (res.data.status == "success") {
            this.dialogAddAcc = false
            this.$message({
              message: '增加成功',
              type: 'success',
              showClose: true,
              offset: '75'
            })
            this.clearAddForm()
            this.queryCard()
          } else {
            this.$message({
              message: '增加失败',
              type: 'error',
              showClose: true,
              offset: '75'
            })
            this.clearAddForm()
            this.dialogAddAcc = false
            this.queryCard()
          }
        })
      }
    },
    delCard() {
      this.$axios.delete('http://127.0.0.1:3000/api/delCard/' + this.delForm.cardId).then(res => {
        if (res.data.status == "success") {
          this.dialogDelAcc = false
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true,
            offset: '75'
          })
          this.queryCard()
        } else {
          this.$message({
            message: '删除失败',
            type: 'error',
            showClose: true,
            offset: '75'
          })
          this.dialogDelAcc = false
          this.queryCard()
        }
      })
    },
    queryCardRcc() {
      this.$axios.get('http://127.0.0.1:3000/api/CardRcc/')
      .then(res => {
        this.accRec = res.data
      })
    },
    reqQueryCardRcc() {
      this.$axios.get('http://127.0.0.1:3000/api/queryCardRcc/' + this.dateValue[0] + '/' + this.dateValue[1])
      .then(res => {
        this.accRec = res.data
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
    exportRcc() {
      const ExportJsonExcel = require('js-export-excel')
      var option={};
      let time = this.getNowTime()
      option.fileName = 'AccRec_' + time
      option.datas=[
        {
          sheetData: this.accRec,
          sheetHeader: ['卡号', '姓名', '刷卡进入时间'],
          columnWidths: [5, 5, 10]
        }
      ];
      var toExcel = new ExportJsonExcel(option); //new
      toExcel.saveExcel(); //保存
    }
  }
}
</script>

<style lang="stylus" scoped>
#accCard
  margin-top 4%
</style>
