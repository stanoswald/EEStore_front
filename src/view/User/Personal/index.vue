<template>
  <div>
    <user-info></user-info>
    <el-button @click="logout">退出</el-button>
  </div>
</template>

<script>
import UserInfo from "@/view/User/Personal/components/UserInfo";
import {removeToken} from "@/utils/auth";
export default {
  name: "PersonalPage",
  components: {UserInfo},
  methods:{
    logout(){
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

</style>
