<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item id="menu-logo">
      <div>
        <img src='../../public/logo.svg' style="width: 64px;" alt="Home"/>
      </div>
      <span id="menu-logo-text">EEStore</span>
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
      <el-icon class="user-menu">
        <ShoppingCart/>
      </el-icon>
    </el-menu-item>
    <el-menu-item index="8" style="margin-right: 20vh;">

      <el-icon class="user-menu">
        <router-link :to="{name: 'login'}" v-if="this.$cookies.get('user_id')!==null">
          <User/>
        </router-link>
        <router-link :to="{name: 'register'}" v-else>
          <User/>
        </router-link>
      </el-icon>
    </el-menu-item>

    <div class="moveblock" ref="moveblock"></div>
  </el-menu>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>

</style>
