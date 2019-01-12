<template>
    <router-link class="tab" :to="info.path" ref="tab" >
        <div class="tab_img">
            <img src="/img/tab.png" :style="style">
        </div>
        <span ref="spa" class="">{{info.title}}</span>
    </router-link>
</template>

<script>
export default {
    name: 'tab-item',
    props: ['info'],
    computed:{
        style(){
            let offset=this.info.index*(-61);
            if(this.$route.path !== this.info.path){
                offset-=32               
            }
            return{
                transform:`translateY(${offset}px)`,
            }
        }
    },
    mounted(){
        //  console.log(this.$refs.tab.$el)
    },
    watch:{
        '$route':function(){
             if(this.$route.path == this.info.path){  
                 console.log(this.$refs.spa)
                this.$refs.spa.className='tab_change'      
            }else{
                 this.$refs.spa.className=''   
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.tab{
    text-align: center; flex: 1;list-style: none;
    span{
    display: block;font-size: 12px;color:#444;
    }
    .tab_img{
        width:26px;height:30px;margin:0 auto;overflow: hidden;padding:4px 0 2;
        img{width:100%;}
    }
    .tab_change{color: #E43929;}
}

</style>
