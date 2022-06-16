<template>
  <div>
    <el-row>
      <el-card v-for="(item,key) in itemList" :key="key">
        <el-card>
          <img :src="item.cover" style="height: 300px"/>
          {{item.name}}
          价格:{{item.price}}円
          <button>-</button>
          1
          <button>+</button>
        </el-card>
      </el-card>
    </el-row>
    总价:{{sum}}
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script>
import {getShoppingList} from "@/api/order";

export default {
  name: "ShoppingPage",
  data(){
    return{
      sum:200,
      itemList:[
        {
          id:'1111',
          cover:"https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850-nvme-ssd/gallery/wd-black-sn850-nvme-ssd-front.png.wdthumb.1280.1280.webp",
          name:"WD_BLACK SN850 NVMe™ SSD",
          price:222
        },
        {
          id:'2222',
          cover:"https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850-nvme-ssd/gallery/wd-black-sn850-nvme-ssd-front.png.wdthumb.1280.1280.webp",
          name:"WD_BLACK SN850 NVMe™ SSD",
          price:222
        },
        {
          id:'33333',
          cover:"https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850-nvme-ssd/gallery/wd-black-sn850-nvme-ssd-front.png.wdthumb.1280.1280.webp",
          name:"WD_BLACK SN850 NVMe™ SSD",
          price:222
        }
      ]
    }
  },
  created(){
  },
  methods:{
    init(){
      getShoppingList().then(response =>{
        this.itemList = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
