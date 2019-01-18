/*

接口:请求首页头部导航数据
method:GET
params:无
*/
const CATELIST_URL='/api/home/catelist'

/*
接口:请求首页轮播图数据
method:GET
params:无
*/
const FOCUSLIST_URL='/api/home/focuslist';

/*
接口:请求首页分类板块数据
method:GET
params:无
*/
const TOPDATA_URL='/api/home/topdata'

/*
接口:请求首页分类数据
method:GET
params:id
*/
const CATEDETAIL_URL = '/api/home/categorylist'

/*
接口：请求分类数据
method: GET
params: 无 
*/
const CATEGORY_LIST_URL = '/api/category/list'

/*
接口：请求分类列表数据
method: GET
params: id  
*/
const CATEGOEY_LIST_GROUP_URL = '/api/category/listmap/group';

/*
接口：请求分类商品列表
method: GET
params: id  
*/
const CATEGOEY_LIST_GROUP_ITEM_URL = '/api/category/listmap/group/item';
// 首页分类列表
const HOME_CATE_ITEM_LIST_URL = '/api/home/catelist/itemlist';

module.exports={
    CATELIST_URL,
    FOCUSLIST_URL,
    TOPDATA_URL,
    CATEDETAIL_URL,
    CATEGORY_LIST_URL,
    CATEGOEY_LIST_GROUP_URL,
    CATEGOEY_LIST_GROUP_ITEM_URL,
    HOME_CATE_ITEM_LIST_URL
    
}
module.exports.TOPIC_FIND_TABS_URL = '/api/topic/find/getTabs';

// 识物tab列表数据
// 参数：tabId (默认值为9  推荐9，达人4，上新5，home6)   size   page
module.exports.TOPIC_FIND_TAB_DATA_URL = '/api/topic/find/getTabData';