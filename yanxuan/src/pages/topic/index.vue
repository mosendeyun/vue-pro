<template>
<div id="topic" class="page">
     <header class="header border-bottom">
        <span class="header-icon"><van-icon name="wap-home" /></span>
        <nav class="title">
            <li class="active">发现</li>
            <li>甄选家</li>
        </nav>
        <span class="header-icon"><van-icon name="search" /></span>
        <span class="header-icon"><van-icon name="shopping-cart-o" /></span>
    </header>
    <nav class="nav border-bottom">
        <li v-for="(tab, index) in tabList" :key="tab.id"
         @click="tabAction(index, tab)"  :class="{active:selectIndex === index}"  >                    
               {{tab.tabName}}
        </li>
    </nav>

    <router-view/>
</div>
</template>

<script>
import {getTopicNavList} from '../../services/homeService.js'
export default {
    data(){
        return {
            tabList:[],
            selectIndex:0
        }
    },
    created(){
        getTopicNavList().then(data=>{
            console.log(data.tabList)
            this.tabList=data.tabList
        })
    },
    methods:{
        tabAction(index){
            this.selectIndex=index
        }
    }
}
</script>

<style lang="scss" scoped>
#topic{
    background: #f4f4f4;
    .header{
        width: 100%;
        height: 44px;
        position: absolute;
        top: 0;
        left: 0;
        .title{
            width: 100px;
            display: flex;
            margin: 0 auto;
            li{
                line-height: 44px;
                text-align: center;
                flex: 1;
                font-size: 14px;
                color: #7F7F7F;
                &.active{
                    font-size: 18px;
                    color: #b4282d;
                    font-weight: bold;
                }
            }
        }
        .header-icon{
            position: absolute;
            font-size: 24px;
            color: #7F7F7F;
            position: absolute;
            top: 10px;
            &:nth-of-type(1){
                left: 10px;
            }
            &:nth-of-type(2){
                right: 44px;
            }
            &:nth-of-type(3){
                right: 10px;
            }
        }
    }
    .nav{
        width: 100%;
        height: 30px;
        display: flex;
        position: absolute;
        left: 0;
        top: 44px;
        justify-content: space-around;
        li{        
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            color: #7F7F7F;
            border-bottom: 2px solid transparent;

                &.active{
                    color: #b4282d;
                    border-bottom: 2px solid #b4282d;
                }
            
        }
    }
}
</style>
