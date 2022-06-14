<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="14">
          <el-card>
            {{this.$route.params.id}}
            <h1>{{item.name}}</h1>
            <h3>
              折扣:{{item.itemDiscount}}
            </h3>
            <h3>
              价格:{{item.itemStock}}円
            </h3>
          </el-card>
          <el-button type="primary">购买</el-button>
        </el-col>
        <el-col :span="9">
          <el-card>
            <img :src="item.cover" style="height: 300px"/>
          </el-card>
        </el-col>
      </el-row>
      <hr>
      详细内容:
    </div>
  </div>
</template>

<script>
import {getItemById} from "@/api/item";

export default {
  name: "GoodsPage",
  data(){
    return{
      item:{
        itemId:'sssss',
        name:"WD_BLACK SN850 NVMe™ SSD",
        cover:"https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850-nvme-ssd/gallery/wd-black-sn850-nvme-ssd-front.png.wdthumb.1280.1280.webp",
        itemPrice:1111,
        itemDiscount:0.97,
        itemOption:'xuanshenme',
        itemStock:222,
        forSale:true
      }
    }
  },
  created() {

  },
  methods:{
    init(){
      getItemById(this.$route.params.id).then(response =>{
        this.item = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
