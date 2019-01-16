//处理数据
import API from '../api'
import {FetchGet,FetchPost} from '../common/fetch'
import { promises } from 'fs';
//请求首页分类数据
export function getHomeCateList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.CATELIST_URL)
         .then(
             (data)=>{
                 resolve(data.map(({name,id})=>({name,id})))
             }
         )
    })
};
//请求首页轮播图数据
export function getHomeFocusList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.FOCUSLIST_URL)
        .then(
            (data)=>{
              resolve(data.map(({id,picUrl,targetUrl})=>({id,picUrl,targetUrl})))
            }
        )
    })
}

//请求首页推荐,分类板块数据
export function getHomeTopData(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.TOPDATA_URL)
        .then(
            data=>{
                resolve({
                    policyDescList:data.policyDescList,
                    kingKongData:{
                        background:data.kingKongModule.background,
                        list:data.kingKongModule.kingKongList.map(({sequen,text,picUrl})=>({id:sequen,text,picUrl}))                
                    },
                    bigPromotionData: [
                        data.bigPromotionModule.bigPromotionList[0].data.contents[0],
                        ...data.bigPromotionModule.bigPromotionList[1].data.contents
                    ],
                    bgUrl: data.bigPromotionModule.backgroundUrl
                })
            }
        )
    })
}
// 请求首页的分类数据
    // export function getHomeCateDetail(id){
    //     return new Promise((resolve,reject)=>{
    //         FetchGet(API.CATEDETAIL_URL,{id})
    //         .then(data=>{
    //             console.log(data)
    //             resolve({
    //                 bannerUrl:data.currentCategory.bannerUrl,
    //                 categoryList:data.categoryItemList.map(item=>{
    //                     return {
    //                         id:  item.category.id,
    //                         name:item.category.name,
    //                         frontDesc:item.category.frontDesc,
    //                         frontName:item.category.frontName,
    //                         itemList:item.itemList.map(listItem=>{
    //                             return {
    //                                 id:listItem.id,
    //                                 name:listItem.name,
    //                                 simpleDesc:listItem.simpleDesc,
    //                                 promotionDesc:listItem.promotionDesc,
    //                                 pieceUnitDesc:listItem.pieceUnitDesc,
    //                                 price:listItem.retailPrice,
    //                                 itemTagList:item.itemTagList
    //                             }
    //                         })
    //                     }
    //                 }),

    //             })
    //         })
    //     })
    // }

    export function getHomeCateDetail(){
        return new Promise((resolve,reject)=>{
            var iframe=document.createElement('iframe');
            iframe.src=API.CATEDETAIL_URL+'?id=' + id;
            iframe.style.display='none'
            iframe.onload=function(){
                console.log(iframe.contentDocument.querySelector('script'))
                let scriptText=iframe.contentDocument.querySelectorAll('script')[10].innerText;
                let index=scriptText.indexOf('=');
                let jsonData=scriptText.substring(index+1,scriptText.length-2);
                let data=JSON.parse(jsonData);
                resolve({
                    bannerUrl:data.currentCategory.bannerUrl,
                    categoryList:data.categoryItemList.map(item=>{
                        return {
                            id:  item.category.id,
                            name:item.category.name,
                            frontDesc:item.category.frontDesc,
                            frontName:item.category.frontName,
                            itemList:item.itemList.map(listItem=>{
                                return {
                                    id:listItem.id,
                                    name:listItem.name,
                                    simpleDesc:listItem.simpleDesc,
                                    promotionDesc:listItem.promotionDesc,
                                    pieceUnitDesc:listItem.pieceUnitDesc,
                                    price:listItem.retailPrice,
                                    tagList:listItem.itemTagList,
                                    listPicUrl:listItem.listPicUrl,
                                    
                                }
                            })
                        }
                    })   
                })
            } 
            document.body.appendChild(iframe);
        })
    }

    //请求分类列表数据
    export function getCategoryList(){
        return new Promise((resolve,reject)=>{
            FetchGet(API.CATEGORY_LIST_URL)
            .then(data=>{
                resolve({
                    categoryL1List:data.categoryL1List.map(item=>{
                        return {
                            id:item.id,
                            name:item.name,
                        }
                    })
                })
            })
        })
    }
////请求分类列表商品数据
    export function getCategoryListGroup(categoryId){
        return new Promise((resolve,reject)=>{
            FetchGet(API.CATEGOEY_LIST_GROUP_URL,{categoryId})
            .then(data=>{
                console.log(data)
                resolve({
                    bannerUrl:data.currentCategory.bannerUrl,
                    id:data.currentCategory.id,
                    currentCategory:data.currentCategory.subCateList.map(item=>{
                        return {
                            wapBannerUrl:item.wapBannerUrl,
                            frontName:item.frontName,
                            name:item.name,
                            id:item.id                           
                        }
                    })
                })
            })
        })
    }