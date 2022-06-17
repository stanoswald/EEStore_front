<template>
  <div>
    <nav-bar></nav-bar>

    <div class="block text-center">
      <el-carousel height="450px">
        <el-carousel-item>
          <img src="../../../public/home/1.jpg" alt="1"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../public/home/2.jpg" alt="2"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../public/home/3.jpg" alt="3"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="item-section">
      <ul style="list-style: none" v-for="(item,key) in itemList" :key="key">
        <li>
          <router-link :to="'/item/'+item.cat_id">
            <ItemCard :data="item"></ItemCard>
          </router-link>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import ItemCard from "@/components/ItemCard";
import {getItemList} from "@/api/item";
import NavBar from "@/components/navBar";
// import {setToken} from "@/utils/auth";

export default {
  name: 'HomePage',
  components: {NavBar, ItemCard},
  data(){
    return{
      itemList:[]
    }
  },
  created(){
    this.init()
    // setToken('user_token',"test")
    // setToken("avatar",'https://images6.alphacoders.com/415/thumb-1920-415519.jpg')
  },
  methods:{
    init(){
      getItemList().then(response =>{
        this.itemList = response.data.productList
        console.log(this.itemList)
      })
    }
  }

}

</script>


<style lang="scss">

* {
  margin: 0;
}

html {
  background-color: #f0f1f2;
}

.el-menu {
  height: 90px;
  margin-bottom: 1px;
}

.flex-grow {
  flex-grow: 1;
}

#menu-logo {
  margin-left: 20vh;
  --el-menu-hover-bg-color: none;
  --el-menu-hover-text-color: none;
}

#menu-logo-text {
  font-size: 40px;
  margin: 0 20px 6px 6px;
  font-weight: bold;
  color: #666666;
}

.el-menu-item, .el-sub-menu__title {
  font-size: 17px;
  font-weight: bold;
}

.user-menu svg {
  width: 100px;
  height: 100px;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.item-section ul {
  display: inline-block;
  padding: 0;
}

.item-section li {
  height: 420px;
  margin-bottom: 16px;

  float: left;
  padding: 20px 20px;
}

.item-section {
  text-align: center;
}

.el-carousel img {
  flex-shrink: 0;
  width: 100%;
  transform: translate(0, -20%);
}
</style>
