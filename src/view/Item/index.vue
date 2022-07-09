<template>
  <div>
    <nav-bar></nav-bar>
    <div style="margin-top: 10px;margin-left: 10px">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-card>
            <h1>{{item.product_name}}</h1>
            <el-radio-group v-model="sort">
              <el-radio-button v-for="(sort,key) in item.item_list" :key="key" :label="key">{{sort.item_option}}</el-radio-button>
            </el-radio-group>
            <el-table :data="item.item_list[sort].item_specific_list" border style="width:100%;margin-top: 20px">
                <el-table-column prop="specific_id" label="id" width="140"></el-table-column>
                <el-table-column prop="specific_name" label="name" width="140"></el-table-column>
                <el-table-column prop="content" label="content"></el-table-column>
                <!--              <tr>-->
                <!--                <th>id</th>-->
                <!--                <th>name</th>-->
                <!--                <th>content</th>-->
                <!--              </tr>-->
                <!--              <tr v-for="(spec,key) in item.item_list[sort].item_specific_list" :key="key">-->
                <!--                <td>{{spec.specific_id}}</td>-->
                <!--                <td>{{spec.specific_name}}</td>-->
                <!--                <td>{{spec.content}}</td>-->
                <!--              </tr>-->
              </el-table>
            <h3>
              折扣:{{item.item_list[sort].item_discount }}
            </h3>
            <h3>
              价格:{{item.item_list[sort].item_price }}円
            </h3>
            <el-input-number v-model="num" controls-position="right" :min="1"></el-input-number>
            <el-button type="primary" @click="addShopping">添加购物单</el-button>
            <el-button type="primary" @click="buy">购买</el-button>
          </el-card>
        </el-col>
        <el-col :span="9">
          <el-card>
            <el-image style="width: 100%" :src="item.product_img"></el-image>
          </el-card>
        </el-col>
      </el-row>
      <hr>
      详细内容:
      <p>{{item.product_detail}}</p>
    </div>
  </div>
</template>

<script>
import {addToShopping, getItemById} from "@/api/item";
import {getToken} from "@/utils/auth";
import NavBar from "@/components/navBar";

export default {
  name: "GoodsPage",
  components: {NavBar},
  data(){
    return{
      sort: 0,
      num:1,
      item:{}
    }
  },
  created() {
    this.init()
  },
  methods:{
    init(){
      getItemById(this.$route.params.id).then(response =>{
        this.item = response.data.product
        console.log(this.item)
      })
    },

    addShopping(){
      console.log("=============addShopping===================")
      if(!getToken('user_token')){
        this.$router.push({name:'login'})
        return;
      }
      addToShopping(this.item.item_list[this.sort].item_id,this.num).then(response =>{
        if (response.code === 200){
          this.$message({
            message:response.message,
            type:'success'
          })
          this.$router.push("/user/shopping")
        }else {
          this.$message({
            message:response.message,
            type:'error'
          })
        }
      })
    },

    buy(){
      if(!getToken('user_token')){
        this.$router.push({name:'login'})
        return;
      }
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
