<template>
  <div>

  </div>
</template>

<script>
import {setToken} from "@/utils/auth";
import {getItemList} from "@/api/item";
import {getShoppingList} from "@/api/order";

export default {
  name: "ShoppingPage",
  data(){
    return{
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
