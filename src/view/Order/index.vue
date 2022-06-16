<template>
  <div>
    <el-row>
      <el-card>

      </el-card>
    </el-row>
  </div>
</template>

<script>

import {getShoppingList} from "@/api/order";

export default {
  name: "orderPage",
  data(){
    return{
      shoppingList:[

      ]
    }
  },
  created() {

  },
  methods:{
    init(){
      getShoppingList().then(response =>{
        this.shoppingList = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
