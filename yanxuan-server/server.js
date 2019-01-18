const express=require('express');
const api=require('./api')
const app=express();
const url=require('url')
const http=require('http')
const jsdom = require('jsdom') ;   
const { JSDOM } =  jsdom ; 
const axios = require('axios');
//请求首页的分类
app.get(api.CATELIST_URL,(req,res)=>{
    let data =require('./data/homeNav.json')
    res.json({
        status:0,
        message:'ok',
        data
    })
})
//请求首页轮播图数据
app.get(api.FOCUSLIST_URL,(req,res)=>{
    let data=require('./data/homeDate.json').focusList;
    res.json({
        status:0,
        message:'ok',
        data
    })
})
//请求首页推荐,分类板块数据
app.get(api.TOPDATA_URL,(req,res)=>{
    let {kingKongModule,bigPromotionModule,policyDescList}=require('./data/homeDate.json')
    res.json({
        status:0,
        message:'ok',
        data:{
            kingKongModule,
            bigPromotionModule,
            policyDescList
        }
    })
})

//请求首页的分类数据
// app.get(api.CATEDETAIL_URL,(req,res)=>{
//     //解析参数
//     let {id}=url.parse(req.url,true).query
//     let data=require('./data/homeCateDate.json');
//     res.json({
//         status:0,
//         message:'ok',
//         data
//     })
// })

app.get(api.CATEDETAIL_URL,(req,res)=>{
    let {id}=url.parse(req.url,true).query;
    let path='http://m.you.163.com/item/list?categoryId='+id;
    http.request({
        hostname:'m.you.163.com',
        path:'/item/list?categoryId='+id
    },(response)=>{ 
        let result='';
        response.on('data',(bf)=>{
            result+=bf;
        })
        response.on('end',()=>{
            res.end(result);
        })
    }).end()
})

//分类专区数据
app.get(api.CATEGORY_LIST_URL, (req, res)=>{
    let id=url.parse(req.url,true).query.id;
    // let path='http://m.you.163.com/item/cateList?categoryId='+id;
    var paths='/item/cateList'
    http.request({
        hostname:'m.you.163.com',
        path:paths
    },(response)=>{ 
        let result='';
        response.on('data',(bf)=>{
            result+=bf;
        })
        response.on('end',()=>{
            // res.end(result);
            const dom = new JSDOM(result,{runScripts:"dangerously"})
            // console.log(dom.window.ftlData,dom.window.ftlData)
            // res.json(dom.window.globalData)
            // res.json(dom.window.ftlData)
            res.json({
                status:0,
                message:'ok',
                data:dom.window.ftlData
            })
        })
    }).end()
});
//分类页面分类列表
app.get(api.CATEGOEY_LIST_GROUP_URL, (req, res)=>{
    let {categoryId} = url.parse(req.url, true).query;
    if(!categoryId){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }
    JSDOM.fromURL('http://m.you.163.com/item/cateList?categoryId='+categoryId, {runScripts: 'dangerously'}).then(dom=>{
        res.json({
            status: 0,
            message: 'ok',
            data: {
                categoryGroupList: dom.window.ftlData.categoryGroupList,
                currentCategory: dom.window.ftlData.currentCategory
            }
        })
    })
})

// // 分类商品列表
app.get(api.CATEGOEY_LIST_GROUP_ITEM_URL, (req, res)=>{
    let {categoryId, subCategoryId} = url.parse(req.url, true).query;
    if(!categoryId || !subCategoryId){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }

    JSDOM.fromURL('http://m.you.163.com/item/list?categoryId='+categoryId+'&subCategoryId='+subCategoryId, {runScripts: 'dangerously'}).then(dom=>{
        res.json({
            status: 0,
            message: 'ok',
            data: dom.window.ftlData.categoryItems
        })
    })
})
// 首页分类列表

app.get(api.HOME_CATE_ITEM_LIST_URL, (req, res)=>{
    let {id} = url.parse(req.url, true).query;
    if(!id){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }

    JSDOM.fromURL("http://m.you.163.com/item/list?categoryId="+id, {runScripts: 'dangerously'}).then(dom => {
        res.json({
            status: 0,
            message: 'ok',
            data: {
                categoryItemList: dom.window.jsonData.categoryItemList,
                currentCategory: dom.window.jsonData.currentCategory
            }
        });
    });
})

// 识物tab数据
app.get(api.TOPIC_FIND_TABS_URL, (req, res)=>{
    axios.get('http://m.you.163.com/topic/v1/find/getTabs.json')
    .then(response=>{
        res.json({
            status: 0,
            message: 'ok',
            data: response.data.data
        })
    })
})


// 识物tab列表数据
// 参数：tabId 默认值为9
app.get(api.TOPIC_FIND_TAB_DATA_URL, (req, res)=>{
    let tabId = url.parse(req.url, true).query.tabId || 9;
    //推荐
    if(tabId == 9){
        axios.get('http://m.you.163.com/topic/v1/find/recManual.json')
        .then(response=>{
            let arr = response.data.data;
            let newData = [];
            arr.map(({topics})=>{
                newData = [...newData, ...topics];
            })
            res.json({
                status: 0,
                message: 'ok',
                data: {
                    hasMore: false,
                    result: newData
                }
            })
        })
    }
    //达人   上新   home
    else if(tabId == 4 || tabId == 5 || tabId == 6){
        let {page, size} = url.parse(req.url, true).query;
        axios.get('http://m.you.163.com/topic/v1/find/getTabData.json', {
            params: {
                page,
                size,
                tabId
            }
        }).then(response=>{
            res.json({
                status: 0,
                message: 'ok',
                data: response.data.data
            })
        })
    }
    else{
        res.json({
            message: 'id错误',
            status: 1,
            data: null
        })
    }
})

app.listen(8888,'localhost',(error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功')
    }
})