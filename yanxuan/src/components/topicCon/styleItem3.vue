<template>
<li class="topic-item style1">
    <h3 class="title">
        {{data.title}}
    </h3>
    <p class="sub-title">
        {{data.subtitle}}
    </p>
    <div class="image">
        <div class="img-item" v-for="(img, index) in data.itemList" :key="index">
            <img :src="img"/>
        </div>
    </div>
    <p class="info">{{data.readCount}}人看过</p>
</li>
</template>

<script>
export default {
    props: ['data', 'type']
}
</script>

<style lang="scss" scoped>
.style1{
    padding: 10px;
    .title{
        font-size: 16px;
        font-weight: normal;
    }
    .sub-title{
        font-size: 14px;
        color: #999;
    }
    .image{
        overflow: hidden;
        .img-item{
            width: 25%;
            float: left;
            padding: 5px;
            box-sizing: border-box;
        }
        img{
            width: 100%;
            background: #efefef;
        }
    }
    .info{
        font-size: 12px;
        color: #999;
    }
}
</style>
