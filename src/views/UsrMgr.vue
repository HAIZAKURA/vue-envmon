<template>
  <div class="user">
    <div id="userCard">
      <el-row>
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <div id="userTable">
              <el-table
                :data="userData"
                height="600"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="userName"
                  label="姓名"
                  width="160"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="userPass"
                  label="密码"
                  width="160"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="userDept"
                  label="部门"
                  width="160"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="userPowr"
                  label="权限"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <br />
              <el-row :gutter="20">
                <el-col :span="8" style="display:none;">
                  <el-button type="primary" @click="queryUsers()">查询</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary" @click="dialogAddUser = true" class="card-btn">增加</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary" @click="dialogDelUser = true" class="card-btn">删除</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary" @click="exportSign()" class="card-btn">签到数据导出</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!--增加用户-->
    <el-dialog
      title="增加用户"
      :visible.sync="dialogAddUser"
      width="40%"
      center
    >
      <el-form :model="addForm" ref="addForm">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="userName">
          <el-input v-model="addForm.userName" autocomplete="off" autofocus></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="userPass">
          <el-input v-model="addForm.userPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth" prop="userDept">
          <el-input v-model="addForm.userDept" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth" prop="userPowr">
          <el-select v-model="addForm.userPowr" placeholder="请选择用户权限" style="width:100%">
            <el-option label="权限级别一" value="1"></el-option>
            <el-option label="权限级别二" value="2"></el-option>
            <el-option label="权限级别三" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddUser = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!--删除用户-->
    <el-dialog
      title="删除用户"
      :visible.sync="dialogDelUser"
      width="40%"
      center
    >
      <el-form :model="delForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-select v-model="delForm.userId" placeholder="请选择要删除的用户" style="width:100%">
            <el-option
              v-for="item in userData"
              :key="item._id"
              :label="item.userName"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDelUser = false">取 消</el-button>
        <el-button type="primary" @click="delUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!--删除用户-->
    <el-dialog
      title="模块显示设置"
      :visible.sync="dialogModVisable"
      width="40%"
      center
    >
      <el-tabs v-model="activePageName" type="card">
        <el-tab-pane label="环 境 监 控 页 面" name="first">
          <el-divider>环境温湿度</el-divider>
          <el-checkbox v-model="$root.showMod.tempOnee">温度一</el-checkbox>
          <el-checkbox v-model="$root.showMod.tempTwoo">温度二</el-checkbox>
          <el-checkbox v-model="$root.showMod.tempThre">温度三</el-checkbox>
          <el-checkbox v-model="$root.showMod.humdOnee">湿度一</el-checkbox>
          <el-checkbox v-model="$root.showMod.humdTwoo">湿度二</el-checkbox>
          <el-checkbox v-model="$root.showMod.humdThre">湿度三</el-checkbox>
          <el-divider>SF<small>6</small>&nbsp;浓度</el-divider>
          <el-checkbox v-model="$root.showMod.sftrOnee">浓度一</el-checkbox>
          <el-checkbox v-model="$root.showMod.sftrTwoo">浓度二</el-checkbox>
          <el-checkbox v-model="$root.showMod.sftrThre">浓度三</el-checkbox>
          <el-checkbox v-model="$root.showMod.sftrFour">浓度四</el-checkbox>
          <el-divider>设备控制</el-divider>
          <el-checkbox v-model="$root.showMod.fansTate">排风机</el-checkbox>
          <el-checkbox v-model="$root.showMod.sffAnste">SF<small>6</small>风机</el-checkbox>
          <el-checkbox v-model="$root.showMod.dehuStae">除湿机</el-checkbox>
          <el-checkbox v-model="$root.showMod.pumpStae">抽水泵</el-checkbox>
          <el-divider>电缆沟水位</el-divider>
          <el-checkbox v-model="$root.showMod.wtlvOnee">一号点</el-checkbox>
          <el-checkbox v-model="$root.showMod.wtlvTwoo">二号点</el-checkbox>
          <el-checkbox v-model="$root.showMod.wtlvThre">三号点</el-checkbox>
          <el-checkbox v-model="$root.showMod.wtlvFour">四号点</el-checkbox>
          <el-checkbox v-model="$root.showMod.wtlvFive">五号点</el-checkbox>
          <el-divider>O<small>3</small>&nbsp;浓度</el-divider>
          <el-checkbox v-model="$root.showMod.oxtrOnee">浓度一</el-checkbox>
          <el-checkbox v-model="$root.showMod.oxtrTwoo">浓度二</el-checkbox>
          <el-checkbox v-model="$root.showMod.oxtrThre">浓度三</el-checkbox>
          <el-checkbox v-model="$root.showMod.oxtrFour">浓度四</el-checkbox>
          <el-divider>状态切换及巡查签到</el-divider>
          <el-checkbox v-model="$root.showMod.maauStae">手自切换</el-checkbox>
          <el-checkbox v-model="$root.showMod.aminStae">布防</el-checkbox>
          <el-checkbox v-model="$root.showMod.signStae">签到</el-checkbox>
        </el-tab-pane>
        <el-tab-pane label="配 电 监 控 页 面" name="second">
          <el-divider>配电设备温度</el-divider>
          <el-checkbox v-model="$root.showMod.trasApha">变压器A相</el-checkbox>
          <el-checkbox v-model="$root.showMod.trasBpha">变压器B相</el-checkbox>
          <el-checkbox v-model="$root.showMod.trasCpha">变压器C相</el-checkbox>
          <el-checkbox v-model="$root.showMod.bbarAtem">母排A相</el-checkbox>
          <el-checkbox v-model="$root.showMod.bbarBtem">母排B相</el-checkbox>
          <el-checkbox v-model="$root.showMod.bbarCtem">母排C相</el-checkbox>
          <el-divider>设备电源、防盗、火灾</el-divider>
          <el-checkbox v-model="$root.showMod.atspAlam">ATS电源</el-checkbox>
          <el-checkbox v-model="$root.showMod.hppwAlam">HP电源</el-checkbox>
          <el-checkbox v-model="$root.showMod.fppwAlam">FP电源</el-checkbox>
          <el-checkbox v-model="$root.showMod.dtupAlam">DTU电源</el-checkbox>
          <el-checkbox v-model="$root.showMod.illeAlam">非法入侵</el-checkbox>
          <el-checkbox v-model="$root.showMod.smokAlam">烟雾报警</el-checkbox>
          <el-divider>UPS输出</el-divider>
          <el-checkbox v-model="$root.showMod.upsoVolt">电压</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsoCurr">电流</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsoFreq">频率</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsoPowe">功率</el-checkbox>
          <el-divider>变压器输出</el-divider>
          <el-checkbox v-model="$root.showMod.tratCurr">电流</el-checkbox>
          <el-checkbox v-model="$root.showMod.traoVolt">电压</el-checkbox>
          <el-checkbox v-model="$root.showMod.traoFreq">频率</el-checkbox>
          <el-checkbox v-model="$root.showMod.traoPfcc">功率因数</el-checkbox>
          <el-checkbox v-model="$root.showMod.trasPwhb">有功电度</el-checkbox>
          <el-checkbox v-model="$root.showMod.resiCurr">剩余电流</el-checkbox>
          <el-divider>避雷装置</el-divider>
          <el-checkbox v-model="$root.showMod.leakCurr">泄露电流</el-checkbox>
          <el-checkbox v-model="$root.showMod.thunStri">雷击次数</el-checkbox>
          <el-checkbox v-model="$root.showMod.spdhAlam">SPD脱扣</el-checkbox>
          <el-checkbox v-model="$root.showMod.scbpAlam">SCB状态</el-checkbox>
          <el-divider>UPS其他状态</el-divider>
          <el-checkbox v-model="$root.showMod.upsoLoad">负荷率</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsbTemp">电池温度</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsbVolt">电池电压</el-checkbox>
          <el-checkbox v-model="$root.showMod.upsfCode">故障码</el-checkbox>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogModVisable = false">取 消</el-button>
        <el-button type="primary" @click="setShowMod()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary" class="modv-btn" @click="dialogModVisable = true">模块显示设置</el-button>
  </div>
</template>

<script>
export default {
  name: 'UsrMgr',
  components: {
  },
  data() {
    return {
      userData: [{}],
      dialogAddUser: false,
      dialogDelUser: false,
      dialogModVisable: false,
      activePageName: 'first',
      addForm: {
        userName: '',
        userPass: '',
        userDept: '',
        userPowr: ''
      },
      delForm: {
        userId: ''
      },
      formLabelWidth: '40px'
    }
  },
  mounted: function() {
    this.queryUsers()
  },
  methods: {
    queryUsers() {
      this.$axios.get('http://localhost:3000/api/user').then(res => (this.userData = res.data))
    },
    delUser() {
      this.$axios.delete('http://localhost:3000/api/delUser/'+this.delForm.userId).then(res => {
        if (res.data.status == "success") {
          this.dialogDelUser = false
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true,
            offset: '75'
          })
        } else {
          this.$message({
            message: '删除失败',
            type: 'error',
            showClose: true,
            offset: '75'
          })
          this.dialogDelUser = false
        }
      })
      this.queryUsers()
    },
    addUser() {
      var addFlag = 1
      var addObj = this.addForm
      // console.log(addObj)
      for (var i = 0, len = this.userData.length; i < len; i++) {
        if (this.userData[i].userName == this.addForm.userName) {
          this.$message({
            message: '用户已存在',
            type: 'warning',
            showClose: true,
            offset: '75'
          })
          this.dialogAddUser = false
          addFlag = 0
          break
        }
      }
      if (addFlag === 1) {
        this.$axios.post('http://localhost:3000/api/addUser', addObj).then(res => {
          if (res.data.status == "success") {
            this.dialogAddUser = false
            this.$message({
              message: '增加成功',
              type: 'success',
              showClose: true,
              offset: '75'
            })
          } else {
            this.$message({
              message: '增加失败',
              type: 'error',
              showClose: true,
              offset: '75'
            })
            this.dialogAddUser = false
          }
        })
      }
      this.queryUsers()
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
    exportSign() {
      this.$axios.get('http://localhost:3000/api/exportSign').then(res => {
        const ExportJsonExcel = require('js-export-excel')
        var option={};
        let time = this.getNowTime()
        option.fileName = 'SignRec_' + time
        option.datas=[
          {
            sheetData: res.data,
            sheetHeader: ['签到时间','签到用户'],
            columnWidths: [10, 10]
          }
        ];
        var toExcel = new ExportJsonExcel(option); //new
        toExcel.saveExcel(); //保存
      })
    },
    setShowMod() {
      this.$axios.post('http://localhost:3000/api/setVisa', this.$root.showMod)
      .then(res => {
        if (res.data.status == "success") {
          this.dialogModVisable = false
          this.$message({
            message: '设置成功',
            type: 'success',
            showClose: true,
            offset: '75'
          })
          this.$axios.get('http://localhost:3000/api/visa').then(res => (this.$root.showMod = res.data))
        } else {
          this.$message({
            message: '设置失败',
            type: 'error',
            showClose: true,
            offset: '75'
          })
          this.$axios.get('http://localhost:3000/api/visa').then(res => (this.$root.showMod = res.data))
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#userCard
  margin-top 4%

#dialog
  text-align left

.card-btn
  width 100%

.modv-btn
  position absolute
  right 30px
  top 90px
</style>
