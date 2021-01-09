import {GET,PUT,DELETE,POST} from './../utils/request'

export function register({data}){
   return  POST({api:'/operator/regist',data})
}
// export function login({data}){
//    return  POST({api:'/operator/login',data})
// }
export function login({data}){
   return  POST({api:'/api/article',data})
}
export function getEmailCode({data}){
   return  POST({api:'/operator/emailcode',data})
}
