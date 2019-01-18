<template>
    <scroller ref="content" :top="44" :bottom="49"
        :forword="handleContentforword" class="border_right"
        :next="handleContentNext">
        <div>
            <img class="banner" :src="bannerUrl" >
            <ul class="content_list clear-fix"  v-for="(item,index) in detailData" :key="index">
                <h4 v-if="item.id===0 ? false:true">{{item.name}}</h4>
                <li class="content_item"  v-for="(items,index1) in item.categoryList" :key="index1">
                    <img :src="items.wapBannerUrl"/>
                    <p>{{items.name}}</p>
                </li>
            </ul>
        </div>
    </scroller>
</template>

<script>
import {getCategoryListGroup} from '../../services/homeService'
import { Indicator } from 'mint-ui';
import Vue from 'vue';
import { Lazyload } from 'vant';
export default {
    props:['indexId'],
    data(){
        return {
            bannerUrl:'',
            detailData:[],
        }
    },
    methods: {
         handleContentforword(){
            // console.log('触发跳转上一个滚动视图');
            if(this.selectIndex > 0){
                this.selectedTab(this.selectIndex - 1);
            }
        },
        handleContentNext(){
            // console.log('触发跳转下一个滚动视图');
            if(this.selectIndex < this.navData.length-1){
                this.selectedTab(this.selectIndex + 1);
            }
        }   
     },
    watch:{
        "indexId":{
             handler(newVal){
                if(newVal){
                    Indicator.open();
                    getCategoryListGroup(newVal)
                    .then(data=>{
                    this.bannerUrl=data.bannerUrl,
                    this.detailData=data.categoryGroupList
                    console.log(data.categoryGroupList)
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

<style lang="scss" scoped>
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
</style>

