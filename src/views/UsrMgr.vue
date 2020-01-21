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
              <el-row :gutter="2">
                <el-col :span="8" style="display:none;">
                  <el-button type="primary" @click="queryUsers()">查询</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" @click="dialogAddUser = true">增加</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" @click="dialogDelUser = true">删除</el-button>
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
          <el-input v-model="addForm.userName" autocomplete="off"></el-input>
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
  </div>
</template>

<script>
export default {
  name: 'UsrMgr',
  components: {
  },
  data() {
    return {
      userData: '',
      dialogAddUser: false,
      dialogDelUser: false,
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
      this.$axios.get('server/api/user').then(res => (this.userData = res.data))
    },
    delUser() {
      this.$axios.delete('server/api/delUser/'+this.delForm.userId).then(res => {
        if (res.data.status == "success") {
          this.dialogDelUser = false
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true
          })
        } else {
          this.$message({
            message: '删除失败',
            type: 'error',
            showClose: true
          })
          this.dialogDelUser = false
        }
      })
      this.queryUsers()
    },
    addUser() {
      var addFlag = 1
      var addObj = this.addForm
      console.log(addObj)
      for (var i = 0, len = this.userData.length; i < len; i++) {
        if (this.userData[i].userName == this.addForm.userName) {
          this.$message({
            message: '用户已存在',
            type: 'warning',
            showClose: true
          })
          this.dialogAddUser = false
          addFlag = 0
          break
        }
      }
      if (addFlag === 1) {
        this.$axios.post('server/api/addUser', addObj).then(res => {
          if (res.data.status == "success") {
            this.dialogAddUser = false
            this.$message({
              message: '增加成功',
              type: 'success',
              showClose: true
            })
          } else {
            this.$message({
              message: '增加失败',
              type: 'error',
              showClose: true
            })
            this.dialogAddUser = false
          }
        })
      }
      this.queryUsers()
    }
  }
}
</script>

<style lang="stylus" scoped>
#userCard
  margin-top 4%

#dialog
  text-align left
</style>
