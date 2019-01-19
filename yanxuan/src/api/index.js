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
// const CATEGOEY_LIST_GROUP_ITEM_URL = '/api/category/listmap/group/item';

const HOME_CATE_ITEM_LIST_URL = '/api/home/catelist/itemlist';


//识物数据
const TOPIC_FIND_TABS_URL = '/api/topic/find/getTabs';
// 识物tab列表数据
const TOPIC_FIND_TAB_DATA_URL = '/api/topic/find/getTabData';

// 识物tab晒单banner数据
const TOPIC_FIND_SHOW_BANNER_URL = '/api/topic/find/getTabShowBanner';
// 识物tab晒单列表数据 
// 参数：page  size  type:1最新，2本月最热，3晒单合辑
const TOPIC_FIND_SHOW_DATA_URL = '/api/topic/find/getTabShowData';



export default {
    CATELIST_URL,
    FOCUSLIST_URL,
    TOPDATA_URL,
    CATEDETAIL_URL,
    CATEGORY_LIST_URL,
    CATEGOEY_LIST_GROUP_URL,
    HOME_CATE_ITEM_LIST_URL,
    TOPIC_FIND_TABS_URL,
    TOPIC_FIND_TAB_DATA_URL,
    TOPIC_FIND_SHOW_BANNER_URL,
    TOPIC_FIND_SHOW_DATA_URL


}
