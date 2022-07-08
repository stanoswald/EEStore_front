<template>
  <div>
    <el-main>
      <el-table
          :data="itemList"
          style="width: 100%"
          ref="multipleTable"
          @selection-change="selectionChange">
        <el-table-column
            type="selection"
            label="全选"
            width="100">
        </el-table-column>

        <el-table-column
            label="封面"
            width="220">
          <template #default="scope">
            <img :src="scope.row.product_img" style="width: 100%"/>
          </template>
        </el-table-column>

        <el-table-column
            prop="product_name"
            label="商品名"
            width="220">
        </el-table-column>
        <el-table-column
            prop="item_price"
            label="价格(元)"
            width="180">
        </el-table-column>
        <el-table-column
            label="数量"
            width="180">
          <template #default="scope">
            <el-input-number v-model="scope.row.item_count" controls-position="right" :min="1"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
            label="操作"
            width="180">
          <template #default="scope">
            <el-button type="danger" @click="deleteShopping(scope.row.cart_id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <div class="under-container">
      总价:{{ sum }}
      <el-button class="buy-btn" @click="buy">购买</el-button>
    </div>
  </div>
</template>

<script>
import {getShoppingList} from "@/api/order";
import {deleteShopping} from "@/api/item";

export default {
  name: "ShoppingPage",
  data() {
    return {
      itemList: [],
      selectList: [],
      address: "testadress"
    }
  },
  created() {
    this.init()
  },
  computed: {
    sum() {
      let sum = 0;
      this.selectList.forEach(item => {
        sum += item.item_price * item.item_count
      })
      return sum;
    },
  },
  methods: {
    deleteShopping(cart_id){
      console.log(cart_id)
      deleteShopping(cart_id).then(response =>{
        this.$message({
          type:"success",
          message:response.message
        })
        this.$router.go(0)
      })
    },
    selectionChange(selection) {
      this.selectList = selection
    },
    init() {
      getShoppingList().then(response => {
        this.itemList = response.data.ByUidCart
        this.$nextTick(() => {
          for (let i = 0; i < this.itemList.length; i++) {
            this.$refs.multipleTable.toggleRowSelection(this.itemList[i]);
          }
        })
      })
    },
    buy() {
      this.$store.commit("order/setOrder", {
        itemPrice: this.sum,
        address: this.address,
        itemList: this.selectList
      })
      this.$router.push({name: "order"})
    }
  }
}
</script>

<style scoped>
.under-container{
  position: fixed;
  border: 1px solid grey;
  width: 100%;
  height: 100px;
  text-align: right;
  font-size: 50px;
  bottom: 0;
}
.buy-btn{
  height: 100%;
  width: 200px;
  background-color: red;
  border-radius: 0;
  font-size: 30px;
  color: #eeeeee;
}
</style>
