<template>
  <div>
    <el-row>
      <el-card>

      </el-card>
    </el-row>
  </div>
</template>

<script>

import {createOrder} from "@/api/order";

export default {
  name: "orderPage",
  data(){
    return{
      shoppingList:[

      ]
    }
  },
  created() {
    this.init()
  },
  methods:{
    init(){
      console.log(this.$store.state.order)
    },
    buy(){
      createOrder(this.sum,this.address,this.orderList).then(response =>{
          console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
