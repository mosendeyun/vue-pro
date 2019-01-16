<template>

      <scroller class="scroll" :top="74" :bottom="49">
          <!-- 轮播 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item class="banner" v-for="item in bannerData" :key="item.id">
                <img :src="item.picUrl">
            </van-swipe-item>
        </van-swipe>
        <div class="top_module" :style="{background:'url('+bgUrl+')'}">
            <ul class="top_con">
                <li class="items" v-for="item in policyDesclist" :key="item.id">
                    <img :src="item.icon">
                    <span>{{item.desc}}</span>
                </li>
            </ul>
            <ul class="kingKong">
                <li class="kingKong_item" v-for="item in kingKongList" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <p>{{item.text}}</p>
                </li>
            </ul>
            <ul class="promotion"  :style="{background:'url('+bgUrl+') center'}">
                <li class="promotion-item" v-for="item in bigPromotionList" :key="item.sequen">
                    <img :src="item.picUrl"/>
                </li>
             </ul>
        </div>
    </scroller>
</template>

<script>
import {getHomeFocusList,getHomeTopData} from '../../services/homeService'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem);
export default {
    data(){
        return{
            bannerData:[],
            policyDesclist:[],
            kingKongImg:'',
            kingKongList:[],
            bigPromotionList: [],
            bgUrl: '',

        }
    },
    created(){
        //请求轮播图数据
        getHomeFocusList().then(data=>{
            // console.log(data)
            this.bannerData=data
        })
        //请求首页的分类板块
        getHomeTopData().then(({policyDescList,kingKongData,bigPromotionData,bgUrl})=>{
            console.log(policyDescList)
            this.policyDesclist=policyDescList
            this.kingKongImg=kingKongData.background;
            this.kingKongList=kingKongData.list;
            this.bigPromotionList = bigPromotionData;
            this.bgUrl = bgUrl;
            console.log(bigPromotionData)
        })
    }
}
</script>

<style lang="scss" scoped>
.scroll{
    width:100%;
}
.banner img{
    width: 100%;
}
.top_module{
    width:100%;
    .top_con{
        display: flex; height:20px;
        text-align: center;margin-bottom:10px;
        .items{
           flex:1;line-height:20px;font-size:12px;color:#b4282d;
            img{width:16px;display: inline-block;
                transform: translateY(4px)}
        }
    }
    .kingKong{
        overflow: hidden;padding-bottom:10px;
        .kingKong_item{
              width:20%;float:left;font-size:12px;padding-bottom:10px;
              text-align: center;color:#333;
              img{width:80%;margin:0 auto;}
        }
    }
    .promotion{
        overflow: hidden;padding-bottom:10px;
        .promotion-item img{
            width: 50%;
            float: left;
        }
        .promotion-item:nth-of-type(1) img{
            width: 100%;
        }
    }
}
</style>

<style>
.van-swipe__indicator {
    border-radius:0;
    width: 14px;
    height: 2px;
}

</style>
