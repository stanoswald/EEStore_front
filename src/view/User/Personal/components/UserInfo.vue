<template>
  <div>
    <el-card shadow="hover" type="flex" style="width: 600px;">
      <div class="clearfix">
        <strong>个人信息</strong>
      </div>
      <div class="info-image">
        <img :src="this.userInfo.avatar">
      </div>
      <el-form label-width="190px">
        <el-form-item label="用户名："> {{ this.userInfo.username  }} </el-form-item>
        <el-form-item label="手机号："> {{ userInfo.tel }} </el-form-item>
        <el-form-item label="地址："> {{ this.userInfo.address }} </el-form-item>
      </el-form>
    </el-card>
    <el-row>
      <el-col :span="4">
        <el-button @click="getOrderList">查看订单</el-button>
      </el-col>
      <el-col :span="4">
        <el-button @click="dialogVisible = true">修改密码</el-button>
      </el-col>
    </el-row>
    <el-dialog title="修改密码"  v-model="dialogVisible"
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
          ]" >
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

import {getUserInfo, updateUserInfo} from "@/api/user";
import {getOrderList} from "@/api/order";

export default {
  name: 'UserInfo',
  filters: {
    isNull(value) {
      return value == null ? '未设置' : value
    }
  },
  data() {
    return {
      dialogVisible:false,
      userInfo: {
        name:'test',
        studentId:'',
        avatar:'https://images6.alphacoders.com/415/thumb-1920-415519.jpg',
        mobile:'155555555555'
      },
      updateForm:{
        old_password: '',
        new_password: '',
        new_password_re:''
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    validatePass(rule, value, callback){
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if (value.length<6 || value >16){
        callback(new Error('密码长度不符！'));
      } else {
        callback();
      }
    },
    validatePass2(rule, value, callback){
      if (value === '') {
        callback(new Error('请再次输入密码'));
      }else if (value.length<6 || value >16){
        callback(new Error('密码长度不符！'));
      } else if (value !== this.updateForm.new_password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    update(formName){
      this.$refs[formName].validate((valid) => {
        if (valid){
          updateUserInfo(this.updateForm.old_password,this.updateForm.old_password).then(response =>{
            console.log(response)
            this.$message({
              type:'success',
              message:response.message
            })
          }).catch(error=>{
            this.$message({
              type:'error',
              message:error.message
            })
          })
        }
      })
    },
    getOrderList(){
      getOrderList().then(response =>{
        console.log(response)
      })
    },
    getUserInfo() {
      getUserInfo().then(response => {
        console.log(response)
        this.userInfo = response.data.user
        console.log(this.userInfo)
      })
    }
  }
}
</script>

<style scoped>
.info-image {
  position: relative;
  margin: 50px auto;
  width: 100px;
  height: 100px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 50px;
  overflow: hidden;
}
.info-image img {
  width: 100%;
  height: 100%;
}

</style>
