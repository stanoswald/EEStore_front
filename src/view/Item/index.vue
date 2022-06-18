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
          <el-button type="primary" @click="addShopping">添加购物单</el-button>
          <el-button type="primary" @click="buy">购买</el-button>
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
import {addToShopping, getItemById } from "@/api/item";
import {getToken} from "@/utils/auth";

export default {
  name: "GoodsPage",
  data(){
    return{
      item:{
        itemId:'testItemId',
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
    this.init()
  },
  methods:{
    init(){
      getItemById(this.$route.params.id).then(response =>{
        this.item = response.data
      })
    },

    addShopping(){
      const token = getToken("user_token")
      console.log("=============addShopping===================")
      console.log(token)
      console.log(this.item.itemId)
      addToShopping(token,this.item.itemId).then(response =>{
        if (response.data.code === 200){
          this.$message({
            message:response.data.message,
            type:'success'
          })
        }else {
          this.$message({
            message:response.data.message,
            type:'error'
          })
        }
      })
    },

    buy(){
      const token = getToken("User_token")
      const itemIdList = []
      itemIdList.push(this.item.itemId)
      console.log("=============buy===================")
      console.log(token)
      console.log(itemIdList)
      this.$router.push("/order/"+this.item.itemId)
      // submitOrder(userId,itemIdList).then(response =>{
      //   if (response.data.code === 200){
      //     this.$message({
      //       message:response.data.message,
      //       type:'success'
      //     })
      //     this.$router.push("/order/"+response.data.orderId)
      //   }else {
      //     this.$message({
      //       message:response.data.message,
      //       type:'error'
      //     })
      //   }
      // })
    },
  }
}
</script>

<style scoped>

</style>
