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
        <el-form-item label="用户名："> {{ this.userInfo.name  }} </el-form-item>
        <el-form-item label="学号："> {{ this.userInfo.studentId }} </el-form-item>
        <el-form-item label="手机号："> {{ userInfo.mobile }} </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import {getLoginUserInfo} from "@/api/user";

export default {
  name: 'UserInfo',
  filters: {
    isNull(value) {
      return value == null ? '未设置' : value
    }
  },
  data() {
    return {
      userInfo: {
        name:'test',
        studentId:'',
        avatar:'https://images6.alphacoders.com/415/thumb-1920-415519.jpg',
        mobile:'155555555555'
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getLoginUserInfo().then(response => {
        console.log(response)
        this.userInfo = response.data
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
