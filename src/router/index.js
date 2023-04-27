//引入vue-router
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';


import Index from '../views/static/index.vue'
import User from '../views/static/user.vue'
import Info from '@/views/static/info.vue' //@ src 
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import LayoutAdmin from '@/layout/admin/index.vue'

//路由表
const routes = [
   { 
   path: '/',  //访问路径
   name:'home',  //命名路由
   components: {
      default:Index, //默认
      Footer, //命名视图
      Header

   }  //页面组件 components 普通组件 页面组件和普通组件是一对多
},
{ 
   path: '/index',  //访问路径
   redirect:'/'
},
{
   path:'/user',
   name:'user',
   component:User,
   meta:{
      title:'user页面',
      Auth:true
   }
   /*
   children:[
      {
         path:'info',
         component:Info
      }
   ]
   */

} ,
{
   path:'/user/:id(\\d+)',
   name:'userId',
   component:User,
   props:true,


} ,
{
   path:'/login',
   name:'login',
   component:()=>import('../views/static/login.vue') //懒加载

},
{
   path:'/object',
   name:'object',
   component:()=>import('../views/static/object.vue'), //懒加载
   children:[
      {
         path:'info',
         component:Info
      },
      {
         path:'',
         name:'objectinfo',//嵌套命名路由
         component:Info
      },
      {
         path:'login',
         component:import('@//views/static/login.vue')
      },

   ]

},
{
   path:'/shops',
   name:'shops',
   component:()=>import('../views/static/shop.vue') //懒加载

},
{
   path:'/cart',
   name:'cart',
   component:()=>import('../views/static/cart.vue') //懒加载

},
{
   path:'/admin',
   name:'admin',
   component:LayoutAdmin,
   children:[
      {
         path:'',
         name:'admin-index',
         component:()=>import('@/views/admin/index.vue')
      },
      {
         path:'info',
         name:'admin-info',
         component:()=>import('@/views/admin/info.vue')
      },
      {
         path:'logout',
         name:'admin-logout',
         component:()=>import('@/views/admin/logout.vue')
      },
      {
         path:'changepassword',
         name:'admin-changepassword',
         component:()=>import('@/views/admin/changepassword.vue')
      },
      {
         path:'forgetpassword',
         name:'admin-forgetpassword',
         component:()=>import('@/views/admin/forgetpassword.vue')
      },
   ]

},














{
   path:'/:pathMatch(.*)*',
   name:'404',
   component:()=>import('../views/404.vue') //懒加载

}

]
//创建路由 router

const router = createRouter({
   //模式
   history:createWebHistory(),
   routes
})
router.beforeEach((to,from,next)=>{
   next();
   //console.log(to,from)
   //if(to.name!=='cart'){
   //   next({name:'cart'})

   //}
  // else{
   //   next()
  // }
})

export default router;