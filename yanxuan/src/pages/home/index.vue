<template>
<div id="home" class="page">
    <header class="header">
        <a class="logo" href="javascript: ;"><img src="/img/logo.png"></a>
        <div class="search">  
            <van-icon name="search" />           
            <span class="placeholder">搜索商品, 共21432款好物</span>
        </div>
        <span class="login">登录</span>
    </header>
    <homeNav v-model=selectIndex  ref="nav"/>

    <homeContent v-show="selectIndex===0"/>

    <homeCateContent v-show="selectIndex!==0" :data="selectItem"/>
</div>
</template>

<script>
import homeNav from '../../components/homeCon/homeNav'
import homeContent from '../../components/homeCon/homeContent'
import homeCateContent from '../../components/homeCon/homeCateContent'
export default {
    components:{
        homeNav,
        homeContent,
        homeCateContent
    },
    data(){
        return{
            selectIndex:0
        }
    },
    computed:{
        //传值给子组件
        selectItem(){
            if(this.selectIndex>0){
                return this.$refs.nav.list[this.selectIndex]
            }else{
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#home{
   width:100%;height:100%;
    .header{
        display: flex; width:100%;height:44px;position:absolute;top:0;left:0;
       padding: 8px;
        .logo{ 
            overflow: hidden;  display: block;flex:1;padding:2px;
            img{width:100%;height:100%;}
        }
        .search{
            padding:0 24px ;margin:-2px 10px;
            background:#eee;border-radius: 5px;font-size:14px;line-height: 30px;
            color:#666;
            .placeholder{
                color: #666;
            }
        }
        .login{
            padding:6px 10px;font-size: 12px;
            color:#b4282d;border: 1px solid #b4282d;border-radius: 3px;

        }
    }
}
.items{width:100%;height:30px;background:#ccc;border:1px solid #fcd;}
</style>
