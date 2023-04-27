//统一api管理
import instance from "./axios";
//data json
const userlogin=(data)=>{
    //返回promis对象
    return instance.request({
        url:'api/mobile/elogin' ,//fullpath=baseURL+url
        method:'post',
        data
    })
}
const adminlogin=(data)=>{
    return instance.request({
        url:'' ,//url=baseURL+url
        method:'post',
        data
    })
}
//const inEven = n => n % 2 ===0;


export {
    userlogin,
    adminlogin
}