<template>
  <div>
    <el-row>
      <el-card v-for="(item,key) in itemList" :key="key">
        <el-checkbox v-model="item.isSet">备选项</el-checkbox>
        <el-card>
          <img :src="item.product_img" style="height: 300px"/>
        </el-card>
        <h3>{{ item.product_name }}</h3>
        <h3>价格:{{ item.item_price }}円</h3>
        <el-input-number v-model="item.item_count" controls-position="right" :min="1"></el-input-number>
      </el-card>
    </el-row>
    总价:{{ sum }}
    <el-button type="primary" @click="buy">购买</el-button>
  </div>
</template>

<script>
import {getShoppingList} from "@/api/order";

export default {
  name: "ShoppingPage",
  data() {
    return {
      itemList: [],
      orderList: [],
      address: "testadress"
    }
  },
  created() {
    this.init()
  },
  computed: {
    sum() {
      let sum = 0;
      this.itemList.filter(item => item.isSet === true).forEach(item => {
        sum += item.item_price * item.item_count
      })
      return sum;
    },
  },
  methods: {
    init() {
      getShoppingList().then(response => {
        this.itemList = response.data.ByUidCart
        this.itemList.forEach(item => item.isSet = true)
      })
    },
    buy() {
      this.itemList.filter(item=>item.isSet === true).forEach(item => {this.orderList.push(item)})
      // createOrder(this.sum,this.address,this.orderList).then(response =>{
      //     console.log(response)
      // })
      this.$store.commit("order/setOrder", {
        itemPrice:this.sum,
        address:this.address,
        itemList:this.orderList
      })
      this.$router.push({name: "order"})
    }
  }
}
</script>

<style scoped>

</style>
