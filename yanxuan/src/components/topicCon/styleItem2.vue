<template>
   <li class="topic-item style2">
        <div class="topic-content">
            <h6 class="header">
            <img :src="data.avatar"/>
            <span>{{data.nickname}}</span>
            </h6>
            <h3 class="title">
                {{data.title}}
            </h3>
            <p class="sub-title">
                {{data.subtitle}}
            </p>
            <p class="info">{{data.readCount}}人看过</p>
        </div>
        
        <div class="topic-image" :style='{backgroundImage: "url("+data.picUrl+")"}'>
        </div>
        
    </li>
</template>

<script>
export default {
   props: ['data']
}
</script>

<style lang="scss" scoped>
.style2{
    display: flex;
    padding: 10px;
    .topic-content{
        flex: 1;
        padding: 0 5px;
        .header{
            width: 100%;
            height: 25px;
            padding: 4px 10px;
            line-height: 25px;
            img{
                height: 25px;
                width: 25px;
                border-radius: 50%;
                float: left;
            }
            span{
                font-weight: normal;
                font-size: 12px;
                float: left;
                padding-left: 10px;
            }
        }
        .title{
            font-size: 16px;
            font-weight: normal;
        }
        .sub-title{
            font-size: 14px;
            color: #999;
        }
        .info{
            font-size: 12px;
            color: #999;
        }
    }
    .topic-image{
        width: 120px;
        height: 120px;
        background-size: cover;
        background-position: center center;
    }
}

</style>

