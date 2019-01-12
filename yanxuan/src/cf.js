const fs=require('fs')
fs.mkdirSync('./pages/home',{recursive:true})
fs.mkdirSync('./pages/cart',{recursive:true})
fs.mkdirSync('./pages/category',{recursive:true})
fs.mkdirSync('./pages/common',{recursive:true})
fs.mkdirSync('./pages/mine',{recursive:true})
fs.mkdirSync('./pages/topic',{recursive:true})
fs.mkdirSync('./common/components/scroller',{recursive:true})
fs.mkdirSync('./common/components/tab-bar',{recursive:true})
fs.mkdirSync('./components/homeCon',{recursive:true})
fs.mkdirSync('./store',{recursive:true})
fs.mkdirSync('./router',{recursive:true})

fs.appendFileSync('./pages/home/index.vue','')
fs.appendFileSync('./pages/cart/index.vue','')
fs.appendFileSync('./pages/category/index.vue','')
fs.appendFileSync('./pages/common/index.vue','')
fs.appendFileSync('./pages/mine/index.vue','')
fs.appendFileSync('./pages/topic/index.vue','')
fs.appendFileSync('./common/components/scroller/scroller.vue','')
fs.appendFileSync('./common/components/tab-bar/Tabs.vue','')
fs.appendFileSync('./common/index.js','')
fs.appendFileSync('./common/components/tab-bar/Tab.vue','')
fs.appendFileSync('./components/homeCon/homeNav.vue','')

fs.appendFileSync('./router/cartRoute.js','')
fs.appendFileSync('./router/categoryRoute.js','')
fs.appendFileSync('./router/homeRoute.js','')
fs.appendFileSync('./router/mineRoute.js','')
fs.appendFileSync('./router/topicRoute.js','')

// fs.renameSync('./router/router.js','./router/index.js')
// fs.renameSync('./store/store.js','./store/index.js')