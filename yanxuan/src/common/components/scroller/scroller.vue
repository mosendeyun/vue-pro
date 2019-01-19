<template>
    <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
        <div class="scroller-cotment" :style="{width:wrapWidth+'px'}">
            <!-- <div class="pull_down" v-if="flag"></div> -->
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'scroller',
    props:{
        width:Number,
        height:Number,
        top:Number,
        bottom:Number,
        scrollY:{
           type:Boolean,
           default:true
        },
         scrollX:{
           type:Boolean,
           default:false
        },
        forword:Function,
        next: Function
    },
    data(){
        return {
            scroll:null,
            wrapWidth:null
        }
    },
    computed:{
        flag(){
            if(this.forword){
                return true
            }else{
                return false
            }
        },
        wrapStyle(){
            if(this.top && this.bottom){
                return {
                    position:'absolute',
                    top:this.top+'px',
                    bottom:this.bottom+'px',
                }
            }else{
                return {
                    width:this.width+'px',
                    height:this.height+'px'
                }
            }
        }
    },
    methods:{
        scrollTo(y,time){
            this.scroll.scrollTo(0,y,time)
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.scroll,{
            scrollX:this.scrollX,
            scrollY:this.scrollY,
             probeType: 3,
             click:true
        })
        
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh();
        })
        //监听滚动跳转到上一页
        // if(this.forword){
        //     this.scroll.on('scrollEnd', ()=>{
        //         let y = this.scroll.y;
        //         if(y >= -10){
        //             //触发跳转上一页
        //             this.forword();
        //         }
                
        //         if(y > -50){
        //             this.scroll.scrollTo(0, -50, 200);
        //         }
        //     })
        // }
        // //监听滚动跳转到下一页面
        // if(this.next){
        //     this.scroll.on('scrollEnd', ()=>{
        //         let y = this.scroll.y;
        //         let maxY = this.scroll.maxScrollY;
        //         if(y < (maxY + 50)){
        //             this.scroll.scrollTo(0, maxY+50, 200);
        //         }
        //         if(y <= maxY){
        //             //滚动到下一页
        //             this.next();
        //         }
        //     })
        // }

    }

}
</script>

<style lang="scss" scoped>
    .scroller-wrap{
        overflow: hidden;
        .pull_down{
            width:100%;
            height:50px;
        }
    }
</style>
