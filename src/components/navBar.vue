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
a{
  text-decoration: none;
}
* {
  margin: 0;
}

html {
  background-color: #f0f1f2;
}

.flex-grow {
  flex-grow: 1;
}

#menu-logo {
  margin-left: 20vh;
  --el-menu-hover-bg-color: none;
  --el-menu-hover-text-color: none;
}

#menu-logo-text {
  font-size: 40px;
  margin: 0 20px 6px 6px;
  font-weight: bold;
  color: #666666;
}

.user-menu svg {
  width: 100px;
  height: 100px;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.item-section ul {
  display: inline-block;
  padding: 0;
}

.item-section li {
  height: 420px;
  margin-bottom: 16px;

  float: left;
  padding: 20px 20px;
}

.el-carousel img {
  flex-shrink: 0;
  width: 100%;
  transform: translate(0, -20%);
}
</style>
