<template>
  <div>
    <h1>订单确认</h1>
    <h3>用户名:{{user}}</h3>
    <h3>电话:{{tel}}</h3>
    <h3>地址:{{address}}</h3>
      <el-card v-for="(item,key) in shoppingList" :key="key">
        <el-card>
          <img :src="item.product_img" style="height: 300px"/>
        </el-card>
        <h3>{{item.product_name}}</h3>
        <h3>价格:{{item.item_price}}円 × {{item.item_count}}</h3>
      </el-card>
    <el-button type="primary" @click="buy">购买</el-button>
  </div>
</template>

<script>

import {createOrder} from "@/api/order";
import {getUserInfo} from "@/api/user";

export default {
  name: "orderPage",
  data(){
    return{
      price:0,
      address:'',
      shoppingList:[],
      user:'',
      tel:''
    }
  },
  created() {
    this.init()
  },
  methods:{
    init(){
      getUserInfo().then(response =>{
        console.log(response)
        this.user = response.data.user.username
        this.tel = response.data.user.tel
      })
      console.log("=====order=====")
      console.log(this.$store.state.order.order)
      this.price = this.$store.state.order.order.price
      this.address = this.$store.state.order.order.address
      this.shoppingList = this.$store.state.order.order.item_list
    },
    buy(){
      this.$confirm('请再次确认订单信息,若无误请点击确定', '确认订单', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        createOrder(this.sum,this.address,this.shoppingList).then(response =>{
          console.log(response)
          this.$message({
            type:"success",
            message:"购买成功"
          })
          this.$router.push("/")
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
