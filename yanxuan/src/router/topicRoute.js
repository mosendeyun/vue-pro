const route={
    path:'/goods',
    component:()=>import('../pages/topic/index'),
    children:[
        {
            path:'goods/:id',
            props:true,
            component:()=>import('../components/topicCon/topicRecontent')
        },
        {
            path:'show',
            component:()=>import('../components/topicCon/showList')
        }
    ]
}
export default route;