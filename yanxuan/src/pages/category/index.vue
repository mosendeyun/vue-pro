<template>
<div id="category" class="page">
    <header class="header border-bottom">
        <p><van-icon name="search"/>搜索商品, 共21446款好物</p>
    </header>      
        <div class="wrap">       
             <scroller  :top="44" :bottom="49" class="border_left">
                <div class="left_con" v-for="(item, index) in navData" :key="item.id" >
                    <li :class="{active: selectIndex===index}" @click="selectedTab(index,item.id)"
                    ref="aaa">               
                        {{item.name}}
                    </li>
                </div>
            </scroller>
             <!-- <CateDatail :indexId="selectItem" :ind="selectIndex"/> -->
              <scroller ref="content" :top="44" :bottom="49"
                :forword="handleContentforword" class="border_right"
                :next="handleContentNext" v-if="navData.length>0">
                <div>
                    <img class="banner" :src="navData[selectIndex].wapBannerUrl" >
                    <ul class="content_list clear-fix"  v-for="(item,index) in detailData" :key="index">
                        <h4 v-if="item.id===0 ? false:true">{{item.name}}</h4>
                        <li class="content_item"  v-for="(items,index1) in item.categoryList" :key="index1">
                            <img :src="items.wapBannerUrl"/>
                            <p>{{items.name}}</p>
                        </li>
                    </ul>
                </div>
            </scroller>
        </div>
    </div>
</template>

<script>
// import CateDatail from '../../components/category/cateDatail'
import {getCategoryList,getCategoryListGroup} from '../../services/homeService'
import { Indicator } from 'mint-ui';
import Vue from 'vue';
import { Lazyload } from 'vant';
export default {
    //  components:{
    //    CateDatail
    // },
    data(){
        return {
            selectIndex: 0,
            navData: [],
            selectItem:'1022001',
             bannerUrl:'',
            detailData:[],
        }
    },
    created(){
        getCategoryList()
        .then(data=>{
            console.log(data)
            this.navData = data.categoryL1List;           
        })
    },
     methods: {
        selectedTab(index ,itemId){
            this.selectIndex = index;
            this.selectItem=itemId
            // this.$nextTick(()=>{
            //     this.$refs.content.scrollTo(-50, 0);
            // })
        } ,
         handleContentforword(){
            // console.log('触发跳转上一个滚动视图');
            if(this.selectIndex > 0){
                this.selectedTab(this.selectIndex - 1,this.selectItem);
            }
        },
        handleContentNext(){
            // console.log('触发跳转下一个滚动视图');
            if(this.selectIndex < 13){
                this.selectedTab(this.selectIndex + 1,this.selectItem);
            }
        }   
     },
      watch:{
        "selectItem":{
             handler(newVal){
                if(newVal){
                    Indicator.open();
                    getCategoryListGroup(newVal)
                    .then(data=>{
                    this.bannerUrl=data.bannerUrl,
                    this.detailData=data.categoryGroupList
                        this.$nextTick(()=>{
                            Indicator.close();
                            //滚动试图滚到最顶部
                            // this.$refs.scroller.scrollTo(0,0)
                        })
                    })
                }
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss">
#category{
    .header{
        width: 100%;
        height: 44px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        padding: 12px 8px;
        box-sizing: border-box;
        p{
            line-height: 20px;
            font-size: 12px;
            padding: 0 10px;
            background: #ededed;
            color: #666;
            border-radius: 4px;
            margin: 0 8px;
            flex: 1;
            text-align: center;
        }
    }
    .wrap{
         display: flex;
        .border_left{  
            width:25%;
            .left_con{
                 width:100%;border-right:1px solid #eee;
                padding:12px 0;            
                li{
                    font-size: 14px;
                    line-height: 20px;
                    color: #333;
                    text-align: center;
                    border-left: 2px solid transparent;
                    &.active{
                        color: #ab2b2b;
                        border-left: 2px solid #ab2b2b;
                    }
                }
            }
        }
        

        
    }
    .border_right{
    right:0;
    padding:10px;
    width:75%;
        .banner{width:100%;}  
        .content_list{
            width:100%;
            h4{
                font-size: 14px;padding: 10px 0;border-bottom: 1px solid #ccc;
            }
            .content_item{
                width:33%;float:left;padding:5px 5px 12px 5px;;
                height: 120px;
                img{width:100%;}
                p{font-size: 12px;color:#333; overflow: hidden;
                        text-overflow: ellipsis;text-align: center;
                        display: -webkit-box;line-height: 12px;
                        -webkit-line-clamp:2;
                        -webkit-box-orient: vertical;}
            }

        }
    }
}
</style>

