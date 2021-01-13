const express = require('express')
const user = express.Router()
const {queryList,create,updata,find,remove} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const {setToken} = require('./../../utils/toke');
const asyncHandler = require('./../../utils/asyncHandler')
 // 注册
 user.post('/api/register',asyncHandler(async (req,res)=>{
    const {body:{name="",psd="",is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()}} = req
    if(!name || !psd){ 
    res.send('参数错误!')
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
module.exports = user