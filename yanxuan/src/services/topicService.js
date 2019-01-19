//处理数据
import API from '../api'
import {FetchGet,FetchPost} from '../common/fetch'
import { promises } from 'fs';
    //请求识物
    export function getTopicNavList(){
        return new Promise((resolve,reject)=>{
            FetchGet(API.TOPIC_FIND_TABS_URL)
            .then(data=>{
                // console.log(data)
                resolve({
                    tabList:data.map(item=>{
                        return{
                            id:item.tabId,
                            tabName:item.tabName,
                            linkUrl:item.linkUrl
                        }                          
                    })
                })
            })
        })
    }
    

// 识物tab列表数据
    export function getTopicTabList(id){
        return new Promise((resolve,reject)=>{
            FetchGet(API.TOPIC_FIND_TAB_DATA_URL, {
                page: 1,
                size: 8,
                tabId: id
            })
            .then(data=>{
                console.log(data)
              let  listData=data.result.map(item=>{
                    return {
                        id: item.topicId,
                        title: item.title,
                        subtitle: item.subTitle,
                        picUrl: item.picUrl,
                        nickname: item.nickname,
                        avatar: item.avatar,
                        readCount: item.readCount,
                        style: item.style,
                        itemList: item.style == 3 ? item.itemList.map(val=>val.itemUrl) : null
                    }
                })
                resolve(listData)
            })
        })
    }