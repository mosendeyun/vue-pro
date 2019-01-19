<template>
    <scroller class="commoned" :top="74" :bottom="49">
        <ul class="topic-list">
            <template v-for="item in listData">
                <item1 :data="item" :type="item.style" :key="item.id" v-if="item.style == 1 || item.style == 0"/>
                <item2 :data="item" :key="item.id" v-if="item.style == 2"/>
                <item3 :data="item" :key="item.id" v-if="item.style == 3"/>
            </template>
        </ul>
    </scroller>

</template>

<script>
import {getTopicTabList} from '../../services/topicService.js'
import item1 from './styleItem1'
import item2 from './styleItem2'
import item3 from './styleItem3'
export default {
     components: {
        item1,
        item2,
        item3
    },
    data(){
        return{
            listData:[]
        }
    },
     watch: {
         '$route.params.id': {
             handler(newVal){
                if(newVal === '9'){
                    getTopicTabList().then(data=>{
                        this.listData=data
                    })
                }else if(newVal === '4' || newVal === '5' || newVal === '6'){
                    getTopicTabList(newVal).then(data=>{
                        console.log(data,'sdfddfdefdefd');
                        this.listData=data
                    })
                }
            },
            immediate: true
        }
    },
}
</script>

<style lang="scss" scoped>
.topic-list{
    background: #efefef;
    padding: 10px 0;
    .topic-item{
        background: #fff;
        margin-bottom: 10px;
    }
}

</style>

