<template>
  <el-card shadow="hover">
    <img :src="data.product_img"
        alt=""/>
    <div style="text-align: center">
      <span>{{ data.product_name }}</span>
      <p>500G | 1T | 2T</p>
      <p style="font-size: 30px;color: red">￥{{ data.mini_item_price }}</p>
<!--      <p>{{ data.mini_item_discount }}折</p>-->
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ItemCard",
  props:{
    data: {
      type:Object
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  display: block;
}

.el-card {
  width: 288px;
  height: 420px;
}
p{
  margin-top: 30px;
}
</style>
