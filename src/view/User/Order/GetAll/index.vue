<template>
  <div>
    <nav-bar></nav-bar>
    <el-row>
      <el-col :span="7">
        <h3>全部订单</h3>
      </el-col>
      <el-col :span="10">
        <el-card v-for="(order,key) in orderList" :key="key" @click="getOrderInfo(order.order_id)" style="margin-bottom: 10px">
          {{order.title}}
          <div style="width: 100%;">
            <img style="width: 100%" :src="order.cover"/>
          </div>
          <el-row v-for="(item,key) in order.item_list" :key="key">
            ￥{{item.item_price}} ×{{item.item_count}}
          </el-row>
          总价:{{order.total_price}}
          地址:{{order.address}}
          <div style="width: 100%;text-align: right">
            <el-button style="" @click="finish(order.order_id)">确认收货</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import {getOrder, getOrderList, getStatus} from "@/api/order";
import NavBar from "@/components/navBar";

export default {
  name: "AllOrder",
  components: {NavBar},
  data(){
    return{
      orderList:[],
    }
  },
  created() {
    this.init()
  },
  methods:{
    finish(order_id){
      getStatus(order_id).then(response =>{
        this.$message({
          type:'success',
          message:response.message
        })
      })
    },
    getOrderInfo(order_id){
      getOrder(order_id).then(response =>{
        console.log(response)
      })
    },
    init(){
      getOrderList().then(response =>{
        console.log(response)
        this.orderList = response.data.order_list
      })
    }
  }
}
</script>

<style scoped>

</style>
