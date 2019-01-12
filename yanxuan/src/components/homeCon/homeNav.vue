<template>
    <nav class="nav_item">
        <scroller ref="scroller" :height='30' :scrollX="true" :scrollY="true">
            <ul class="list">
                <li ref="item" class="item" :class="{active:selectIndex===index}" v-for="(item,index) in list" :key="item.id"
                    @click="activeAction(index)">
                    {{item.name}}
                </li>
            </ul>
        </scroller>
        <div class="scoll" @click="showAction">
            <span class="fade"></span>
            <span><van-icon name="arrow-down" /></span>
        </div>
        <div class="menu_bar" v-show="showMenu">
            <h3>全部频道</h3>
            <ul class="menu">
                <li v-for="(item,index) in list" :key="item.id" @click="activeAction(index)"
                :class="{active:selectIndex===index}">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="cover" v-show="showMenu" @click="showAction"></div>
    </nav>
</template>

<script>
import {getHomeCateList} from '../../services/homeService.js'
export default {
    data(){
        return{
            list:[],
            selectIndex:0,
            showMenu:false
        }
    },
    methods:{
        showAction(){
            this.showMenu=!this.showMenu;
        },
        activeAction(index){
            console.log(1)
            this.selectIndex=index;
            this.showMenu=false
        },
    },
    created(){
        getHomeCateList().then(data=>{
            this.list=data
             this.$nextTick(()=>{
                 let width=0;
                 this.$refs.item.map(item=>{
                     width+=item.offsetWidth;
                 })
                //  设置宽度
                this.$refs.scroller.wrapWidth=width;
                //刷新试图
             })
        })
        //  this.FetchGet('/api/home/catelist').then(
        //      (data)=>{
        //          //过滤数据,解构
        //         //  data.map(({name,id})=>{
        //         //      return{
        //         //          name,
        //         //          id
        //         //      }
        //         //  })
        //          this.list=data.map(({name,id})=>({name,id}))
        //          console.log(this.list)
        //      }
        //  )
    },
}
</script>

<style lang="scss" scoped>
 .nav_item{
     width:100%;height:30px;border-bottom: 1px solid #ccc;
     position:absolute;top:44px;left:0;background:#eee;
     .list{
        overflow: hidden;white-space: nowrap;z-index: 10;
         .item{
             display: inline-block;
            padding: 0 10px;
            font-size: 12px;
            line-height: 26px;
            color: #333;
            &.active{
                color: #b4282d;
                border-bottom: 1px solid #b4282d;
            }
         }
     }
     .scoll{
         width:60px;height:30px;z-index: 20;
         position: absolute;top:0;right:0;
         span{
             display: block;
             float: left;height:100%;
         }
          span:nth-of-type(1){
            width: 20px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255,255,255,1));
        }
        span:nth-of-type(2){
            width: 40px;
            line-height: 26px;
            text-align: center;
            background: #fff;
        }
     }
    .menu_bar{
        z-index:12;width:100%;position:absolute;top:0;left:0;
        background:#fff; padding: 10px;
        h3{
            font-size: 16px;color: #333;padding-left: 4px;
        }
        .menu{           
            li{
                float: left;margin:5px;width:76px;height:30px;border:1px solid #ccc;
                border-radius: 5px;text-align: center;line-height: 30px;
                font-size: 12px;
                }
        }
    
    }
    .cover{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}
 }
</style>
