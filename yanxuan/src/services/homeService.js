//处理数据
import API from '../api'
import {FetchGet,FetchPost} from '../common/fetch'

export function getHomeCateList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.CATELIST_URL)
         .then(
             (data)=>{
                 resolve(data.map(({name,id})=>({name,id})))
             }
         )
    })
}