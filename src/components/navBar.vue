<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
  >
    <el-menu-item id="menu-logo">
      <router-link :to="{name:'index'}">
        <img src='../../public/logo.svg' style="width: 64px;" alt="Home"/>
      <span id="menu-logo-text">EEStore</span>
      </router-link>
    </el-menu-item>

    <el-menu-item index="1">机械硬盘</el-menu-item>
    <el-menu-item index="2">固态硬盘</el-menu-item>
    <el-menu-item index="3">固态硬盘</el-menu-item>
    <el-menu-item index="4">存储卡</el-menu-item>
    <el-sub-menu>
      <template #title>按场景分类</template>
      <el-menu-item index="5-1">家用</el-menu-item>
      <el-menu-item index="5-2">NAS</el-menu-item>
      <el-menu-item index="5-3">云、边缘和数据中心</el-menu-item>
    </el-sub-menu>

    <div class="flex-grow"></div>
    <el-menu-item index="6">
      <el-icon class="user-menu">
        <Search/>
      </el-icon>
    </el-menu-item>
    <el-menu-item index="7">
      <router-link :to="{name: 'shopping'}" >
        <el-icon class="user-menu">
          <ShoppingCart/>
        </el-icon>
      </router-link>
    </el-menu-item>
    <el-menu-item index="8" style="margin-right: 20vh;">

      <router-link :to="{name: 'personal'}">
        <el-icon class="user-menu" v-if="!avatar">
          <User/>
        </el-icon>
        <el-avatar :src="avatar" v-else></el-avatar>
      </router-link>
    </el-menu-item>

    <div class="moveblock" ref="moveblock"></div>
  </el-menu>
</template>

<script>
import {getToken} from "@/utils/auth";

export default {
  name: "navBar",
  data(){
    return {
      avatar:''
    }
  },
  created() {
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      this.avatar = getToken("avatar")
    }
  }
}
</script>

<style scoped>

</style>
