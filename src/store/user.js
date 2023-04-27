import { defineStore } from "pinia"
import { ref } from 'vue'
//选项式
/**
 * 创建Store 注意命名:useUserStore
 * user 是 storeId 唯一
 * 核心:state 其他属性都是为state服务 是个箭头函数 并且return返回 数据一定要赋值
 * getters对象 主要作用是对state的数据进行过滤
 * actions对象 修改state里面的数据 方法
 * plugins 插件
 */
export const useUserStore=defineStore('user',{
    //状态值是核心
    state:()=>{
        return {
            token:'',
            userinfo:{
                "state":1,
                "id":0,
                "userName":"",
                "userType":"",
                "token":"",
                "binding":0,
                "createTime":"",
                "updateTime":"",
                "email":""
            }
            // str:undefined,
            // str1:null,
            // str2:NaN
        }
    },
    getters:{
        getToken(){
           return this.token; 
        }
    },
    actions:{
        /**
         * token 赋值
         * @param {*} token 
         */
        setToken(token){
            this.token=token
        },
        /**
         * 填充用户数据
         * @param {*} user 
         */
        fillUserinfo(user){
            this.userinfo=user
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'userinfo',
                storage:localStorage,//会话存储 sessionStorage  本地存储 localStorage
                paths:['token']
            }
        ]
    }
})


/**
 * 组合式 没有this
 * 定义响应式值
 * 方法就相当于actions
 */
// export const useUserStore = defineStore('user', () => {
//     let token = ref('');
//     let userinfo = ref({});
//     const setToken = (token)=>{
//         token=token
//     }
//     const fillUserinfo=(user)=>{
//         userinfo=user
//     }
//     return {token,userinfo,setToken,fillUserinfo}
// })