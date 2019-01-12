import axios from 'axios'
import {Toast} from 'mint-ui'
export function FetchGet(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params
        })
        .then(response=>{
            if(response.data.status){
                // reslove()
                Toast('请求错误')
            }else{
                Toast('请求成功')
                resolve(response.data.data)
            }
        })
        .catch(error=>{ 
            Toast('网络错误')
        })
    })
}

export function FetchPost(url,params={}){
    axios.post(url,params)
}