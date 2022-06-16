<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item class="input-prepend restyle" prop="mobile" :rules="[
            {required: true, message: '请输入手机号码', trigger: 'blur' },
            {validator:checkPhone, trigger: 'blur'}
            ]">
          <div>
            <el-input type="text" placeholder="手机号" v-model="user.mobile"/>
            <i class="iconfont icon-phone"/>
          </div>
        </el-form-item>
        <el-form-item class="input-prepend" prop="password" :rules="[
            { required:true, message: '请输入密码', trigger: 'blur' }
            ]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>
        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getLoginUserInfo, subjectLogin} from "@/api/user";
import {setToken} from "@/utils/auth";

export default {
  name: "loginPage",
  data() {
    return {
      user: {
        mobile: '',
        password: ''
      },
      //用户信息
      loginInfo: {}
    }
  },
  methods: {
    submitLogin(){
      subjectLogin(this.user)
          .then(response =>{
            const token = response.data.data.token
            setToken("user_token",token)
            getLoginUserInfo(token)
                .then(response =>{
                  this.loginInfo = JSON.stringify(response.data.data.userInfo)
                  setToken("user_id",this.loginInfo.userId)
                  setToken("avatar",this.loginInfo.avatar)
                  setToken("user_name",this.loginInfo.username)
                  window.location.href = "/"
                })

          })
    },
    checkPhone(rule, value, callback) {
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机号码格式不正确'))
      }
      return callback()
    }
  }
}
</script>

<style scoped>

</style>
