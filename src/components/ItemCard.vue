<template>
  <el-card shadow="hover">
    <img
        src="https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850-nvme-ssd/gallery/wd-black-sn850-nvme-ssd-front.png.wdthumb.1280.1280.webp"
        alt="test"/>

    <div style="text-align: center">
      <span>WD_BLACK SN850 NVMe™ SSD</span>
      <p>500G | 1T | 2T</p>
      <p>￥999</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ItemCard"
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