const express=require('express');
const api=require('./api')
const app=express();

app.get(api.CATELIST_URL,(req,res)=>{
    let data =require('./data/homeNav.json')
    res.json({
        status:0,
        message:'ok',
        data
    })
})

app.listen(8888,'localhost',(error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功')
    }
})