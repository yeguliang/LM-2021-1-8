const express = require('express')
const user = express.Router()
const {queryList,create,updata,find,remove} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const {setToken} = require('./../../utils/toke');
const asyncHandler = require('./../../utils/asyncHandler')
const sendMail = require('./../../utils/nodemailer')
const { getRandom } = require('./../../utils/tools')
let mailAll = {}

 // 注册
 user.post('/api/register',asyncHandler(async (req,res)=>{
    const {body:{name="",psd="",code="",is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()}} = req
    if(!name || !psd || !code){ 
    res.send('参数错误!')
    return
    }
    if(mailAll[name] != code){
        console.log(mailAll[name],code)
        res.send("验证码错误！")
        return
    }
    let user_list = await queryList("user")
    if(user_list.some((item)=>{
        return item.name == name
    })){
        return res.status(403).send('用户名重复！');
    }
    let list = await create({name,psd,is_hidden,create_at,updata_at},"user")
    res.send(list[list.length-1])
})),
 // 修改密码
 user.put('/api/reset',asyncHandler(async (req,res)=>{
    const {body:{name="",psd="",code="",is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()}} = req
    console.log(mailAll,name,psd,code,mailAll[name])
    if(!name || !psd || !code){ 
    res.send('参数错误!')
    return
    }
    if(mailAll[name] != code){
        res.send("验证码错误！")
        return
    }
    let user_list = await queryList("user")
    let userInfo = await _.find(user_list,{name:name})
    if(!userInfo){
        return res.status(404).send('未找到该用户！');
    }
    userInfo.psd = psd
    let list = await updata({...userInfo,updata_at:moment(new Date()).format()},"user")
    res.send(list[list.length-1])
})),
// 登录
user.post('/api/login',asyncHandler(async (req,res)=>{
    const {body:{name="",psd=""}} = req
    if(!psd || !name){ 
    res.send('参数错误!')
    return
    }
    let list = await queryList("user")
    let nowUser = _.find(list,{name,psd})
    if(nowUser){
    nowUser.token = await setToken(nowUser.name,nowUser.id)
    res.send(nowUser)
    }else{
    res.send('查无此人')
    return
    }
}))
// code
user.get('/api/login/mailer',asyncHandler(async (req,res)=>{
    const {query:{email=""}} = req
    if(!email){
        res.send('参数错误!')
        return
    }
    const code =  getRandom(1000000,0)
    const emailInfo = await sendMail(email,code)   
    if(emailInfo.messageId){
        mailAll[email]=code
        // console.log('=>mailAll',mailAll)
        res.send('发送成功!')
        return
    }
    res.send('发送失败!')
}))
module.exports = user