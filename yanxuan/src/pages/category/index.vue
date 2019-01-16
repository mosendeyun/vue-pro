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
             <CateDatail :indexId="selectItem"/>
        </div>
    </div>
</template>

<script>
import CateDatail from '../../components/category/cateDatail'
import {getCategoryList} from '../../services/homeService'
export default {
     components:{
       CateDatail
    },
    data(){
        return {
            selectIndex: 0,
            navData: [],
            detailData:[],
            selectItem:'1022001'
        }
    },
    created(){
        getCategoryList()
        .then(data=>{
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
        },
    
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
    
}
</style>

