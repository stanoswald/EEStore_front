<template>
  <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item id="menu-logo">
        <div>
          <img src='../../../public/logo.svg' style="width: 64px;" alt="Home"/>
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
          <User/>
        </el-icon>
      </el-menu-item>


      <div class="moveblock" ref="moveblock"></div>
    </el-menu>

    <div class="block text-center">
      <el-carousel height="450px">
        <el-carousel-item>
          <img src="../../../public/home/1.jpg" alt="1"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../public/home/2.jpg" alt="2"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../public/home/3.jpg" alt="3"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="item-section">
      <ul style="list-style: none">
        <li>
          <ItemCard></ItemCard>
        </li>
        <li>
          <ItemCard></ItemCard>
        </li>
        <li>
          <ItemCard></ItemCard>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: 'HomePage',
  components: {ItemCard}

}

</script>


<style lang="scss">

* {
  margin: 0;
}

html {
  background-color: #f0f1f2;
}

.el-menu {
  height: 90px;
  margin-bottom: 1px;
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

.el-menu-item, .el-sub-menu__title {
  font-size: 17px;
  font-weight: bold;
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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

.item-section {
  text-align: center;
}

.el-carousel img {
  flex-shrink: 0;
  width: 100%;
  transform: translate(0, -20%);
}
</style>
