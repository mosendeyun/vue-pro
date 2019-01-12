<template>
  <div id="app">
    <router-view/>
   <tab-bar>
     <tab-item v-for="item in tabList" :key="item.title" :info="item">

     </tab-item>
   </tab-bar>

  </div>
</template>

<script>
export default {
  data(){
    return {
      tabList:[
        {title:'首页',path:'/home',index:2},
        {title:'分类',path:'/category',index:1,},
        {title:'识物',path:'/topic',index:3},
        {title:'购物车',path:'/cart',index:0},
        {title:'我的',path:'/mine',index:4},
      ]
    }
  }
}
</script>


<style lang="scss">

</style>
