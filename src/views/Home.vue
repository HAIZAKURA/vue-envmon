<template>
  <div class="home">
    <div id="loginCard">
      <el-row>
        <el-col :span="8" :offset="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>登录系统</span>
            </div>
            <div>
              <el-form ref="LoginForm" :model="loginForm">
                <el-form-item>
                  <el-input type="text" v-model="loginForm.userName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="loginForm.userPass" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login()">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      loginForm: {
        userName: '',
        userPass: ''
      },
      nowUser: {
        uid: '',
        nam: '',
        pow: ''
      }
    }
  },
  computed: {
    ...mapGetters(['uid','nam','pow'])
  },
  methods: {
    login() {
      this.$axios.get('server/api/findUser/'+this.loginForm.userName).then(res => {
        // console.log(res)
        if (res.data == null) {
          this.$message({
            message: '用户不存在',
            type: 'error',
            showClose: true,
            offset: '75'
          })
        } else {
          if (this.loginForm.userPass == res.data.userPass) {
            this.setUid(res.data._id)
            this.setPow(res.data.userPowr)
            this.setNam(res.data.userName)
            this.nowUser.uid = res.data._id
            this.nowUser.nam = res.data.userName
            this.nowUser.pow = res.data.userPowr
            this.$message({
              message: '登录成功',
              type: 'success',
              showClose: true,
              offset: '75'
            })
            this.$router.push('/env-mon')
            // console.log(this.uid)
            // console.log(this.nam)
            // console.log(this.pow)
          } else {
            this.$message({
              message: '密码错误',
              type: 'error',
              showClose: true,
              offset: '75'
            })
          }
        }
      })
    },
    ...mapActions(['setUid','setNam','setPow'])
  }
}
</script>

<style lang="stylus" scoped>
#loginCard
  margin-top 8%
</style>
