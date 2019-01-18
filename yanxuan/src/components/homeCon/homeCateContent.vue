<template>
      <scroller class="scroll" :top="74" :bottom="49" ref="scroller">
        <img class="banner" :src="bannerUrl" alt="">
        <div class="title" v-for="itemList in list" :key="itemList.id">
            <h3>{{itemList.name}}</h3>
            <p class="front">{{itemList.frontName}}</p>
            <ul class="title_con">
                <lazy-component>
                <li class="title_list" v-for="item in itemList.itemList" :key="item.id">
                   <div class="con_img">
                        <img :src="item.listPicUrl" v-lazy="item.listPicUrl" >
                        <span>{{item.simpleDesc}}</span>
                   </div>
                   <h5>{{item.name}}</h5>
                   <h6>¥{{item.price}}</h6>
                   <p class="price" v-for="items in item.tagList" :key="items.id">
                       {{items.name}}
                    </p>
                </li>
                </lazy-component>

            </ul>
        </div>
    </scroller>
</template>

<script>
import {getHomeCateDetail} from '../../services/homeService'
import { Indicator } from 'mint-ui';
import Vue from 'vue';
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload, {lazyComponent:true});
export default {
    props:['data'],
    data(){
        return {
            bannerUrl:'',
            list:[]
        }
    },
    watch:{
        "data.id":function(newVal){
            if(newVal){
                Indicator.open();
                getHomeCateDetail(newVal)
                .then(data=>{
                    this.bannerUrl=data.bannerUrl,
                    this.list=data.categoryList,
                    console.log(this.list)
                    this.$nextTick(()=>{
                        Indicator.close();
                        //滚动试图滚到最顶部
                        this.$refs.scroller.scrollTo(0,0)
                    })
                })
            }
        }
    }


}
</script>

<style lang="scss" scoped>
.scroll{
    background:#eee;
    .banner{
        width:100%;
    }
    .title{
        overflow: hidden;background:#fff;margin-top:10px;padding: 10px 7px 5px;
        h3,.front{width:100%;font-size: 18px;line-height: 18px;
        color:#000;text-align: center;}
        .front{color:#ccc;font-size: 12px;}
        .title_con{         
            .title_list{
                width:50%;float:left;padding:10px 5px;position: relative;
                height:282px;
                img{width:100%;display: block;}
                .con_img{
                    width:100%;
                    span{width:100%;font-size: 12px;color: #9F8A60; background: #F1ECE2;
                    text-align: center;text-overflow: ellipsis; display: -webkit-box;
                    -webkit-line-clamp:1;  overflow: hidden; -webkit-box-orient: vertical;
                    line-height: 20px;}
                }
                h5{font-size: 14px;color:#000;line-height: 18px;margin-top:10px;
                   overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:1;
                    -webkit-box-orient: vertical;
                }
                h6{line-height: 24px;color: #b4282d;font-size: 14px;}
                .price{
                   border:1px solid red;font-size: 12px;position: absolute;
                   bottom:12px;left:5px;padding: 1px;color: #b4282d;
                    text-align: center;border-radius: 3px;line-height: 16px;
                }
            }
        }
        
    }

}
</style>

