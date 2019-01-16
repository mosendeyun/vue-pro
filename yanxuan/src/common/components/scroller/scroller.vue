<template>
    <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
        <div class="scroller-cotment" :style="{width:wrapWidth+'px'}">
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
        }
    },
    data(){
        return {
            scroll:null,
            wrapWidth:null
        }
    },
    computed:{
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
        // this.scroll=new BScroll(this.$refs.scroll);
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh();
        })
    }

}
</script>

<style lang="scss" scoped>
    .scroller-wrap{
        overflow: hidden;
    }
</style>
