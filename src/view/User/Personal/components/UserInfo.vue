<template>
  <div>
    <el-card shadow="hover" type="flex" style="width: 600px;">
      <div class="clearfix">
        <strong>个人信息</strong>
      </div>
      <div class="info-image">
        <img :src="this.userInfo.avatar" @click="dialogVisible = true">
      </div>
      <el-form label-width="190px">
        <el-form-item label="用户名："> {{ this.userInfo.username  }} </el-form-item>
        <el-form-item label="手机号："> {{ userInfo.tel }} </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="修改头像" v-model="dialogVisible">
      <el-form-item label="添加图片">
        <el-upload class="upload-demo" :auto-upload="false" drag :on-change="(file)=>save_img(file)" action=""
                   multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
      </el-form-item>
      <el-button @click="chgAvatar">确认</el-button>
    </el-dialog>
  </div>
</template>

<script>

import {chgAvatar, getUserInfo} from "@/api/user";

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
      image:'',
      userInfo: {
        avatar:'',
        mobile:'155555555555'
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getUserInfo().then(response => {
        console.log(response)
        this.userInfo = response.data.user
        console.log(this.userInfo)
      })
    },
    save_img(image) {
      this.image = image.raw
    },
    chgAvatar(){
      console.log(this.image)
      chgAvatar(this.image).then(response =>{
        console.log(response)
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
