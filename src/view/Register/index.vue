<template>
  <div class="main">
    <el-row>
      <el-col :span="9"></el-col>
      <el-col :span="6">
        <el-card style="margin-top: 100px">
          <div class="title">
            <router-link :to="{name:'login'}">登录</router-link>
            <span>·</span>
            <router-link :to="{name:'register'}">注册</router-link>
          </div>
          <div class="sign-up-container">
            <el-form ref="userForm" :model="params">
              <el-form-item class="input-prepend restyle" prop="username" :rules="[
                  { required: true, message: '请输入你的用户名', trigger: 'blur' }
            ]">
                <div>
                  <el-input type="text" placeholder="用户名" v-model="params.username"/>
                  <i class="iconfont icon-user"/>
                </div>
              </el-form-item>
              <el-form-item class="input-prepend" prop="password" :rules="[
                  { required:true, message: '请输入密码', trigger: 'blur' }]">
                <div>
                  <el-input type="password" placeholder="设置密码" v-model="params.password"/>
                  <i class="iconfont icon-password"/>
                </div>
              </el-form-item>
              <div class="btn">
                <el-button plain @click="submitRegister('userForm')">注册</el-button>
              </div>
              <p class="sign-up-msg">
                点击 “注册” 即表示您同意并愿意遵守简书
                <br>
                <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
                和
                <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。
              </p>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {registerMember} from "@/api/user";

export default {
  name: "registerPage",
  data() {
    return {
      params: { //封装注册输入的数据
        username: '',
        password: ''
      },
      disabled: false,
    }
  },
  methods: {
    submitRegister(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          registerMember(this.params)
              .then(response => {
                this.$message({
                  type: 'success',
                  message: response.message
                })
                this.$router.push({name: 'login'})
              })
        }
      })

    },
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.sign-up-button {
  margin-bottom: 10px;
}

.sign-up-container {
  text-align: center;
}

.sign-up-msg {
  color: grey;
  font-size: 10px;
}
</style>
