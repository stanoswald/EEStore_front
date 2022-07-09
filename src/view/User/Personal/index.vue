<template>
  <div>
    <nav-bar></nav-bar>
    <el-row style="margin-left: 20px;margin-top: 20px;color: #666666">
      <el-col :span="5">
        <h2>订单管理</h2>
        <div style="margin-left: 30px;margin-top: 10px">
          <router-link :to="{name:'getAllOrder'}">
            <el-button style="margin-bottom: 5px">已发货订单</el-button>
          </router-link>
          <br/>
          <router-link :to="{name:'getWaiting'}">
            <el-button>待发货订单</el-button>
          </router-link>
        </div>
        <br/>
        <h2>账号管理</h2>
        <div style="margin-left: 30px;margin-top: 10px">
          <el-button @click="dialogVisible = true" style="margin-bottom: 5px">修改密码</el-button>
          <br/>
          <el-button @click="logout">退出</el-button>
        </div>
      </el-col>
      <el-col :span="10">
        <user-info></user-info>
      </el-col>
      <el-col :span="6"/>
    </el-row>
    <el-dialog title="修改密码" v-model="dialogVisible"
               width="30%"
    >
      <el-form
          :model="this.updateForm"
          ref="ruleForm"
          status-icon
          label-width="100px"
      >
        <el-form-item label="旧密码：" prop="old_password" :rules="[
          { required: true, message: '请输入旧密码', trigger: 'blur' }
          ]">
          <el-input type="password" v-model="updateForm.old_password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="new_password" :rules="[
          { required: true, validator: validatePass, trigger: 'blur' }
        ]">
          <el-input type="password" v-model="updateForm.new_password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="new_password_re" :rules="[
          { required: true, validator: validatePass2, trigger: 'blur' }
          ]">
          <el-input type="password" v-model="updateForm.new_password_re" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update('ruleForm')">确认修改</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
import UserInfo from "@/view/User/Personal/components/UserInfo";
import {removeToken} from "@/utils/auth";
import {updateUserInfo} from "@/api/user";
import {getWaiting} from "@/api/order";
import NavBar from "@/components/navBar";

export default {
  name: "PersonalPage",
  components: {NavBar, UserInfo},
  data() {
    return {
      dialogVisible: false,
      updateForm: {
        old_password: '',
        new_password: '',
        new_password_re: ''
      }
    }
  },
  methods: {
    getWaiting() {
      getWaiting().then(response => {
        console.log(response)
      })
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value > 16) {
        callback(new Error('密码长度不符！'));
      } else {
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value.length < 6 || value > 16) {
        callback(new Error('密码长度不符！'));
      } else if (value !== this.updateForm.new_password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateUserInfo(this.updateForm.old_password, this.updateForm.old_password).then(response => {
            console.log(response)
            this.$message({
              type: 'success',
              message: response.message
            })
          }).catch(error => {
            this.$message({
              type: 'error',
              message: error.message
            })
          })
        }
      })
    },
    logout() {
      removeToken('user_token');
      removeToken('user_name');
      removeToken('user_id');
      removeToken('avatar');
      window.location.href = "/"
    }
  }
}
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}</style>
