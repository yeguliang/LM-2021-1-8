const express = require('express')
const router = express.Router()
const {query,create,updata,find,remove} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const {setToken} = require('./../../utils/toke');
exports.user = {
    // 注册
    register:router.post('/api/register',(async (req,res)=>{
        const {body:{name="",psd="",is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()}} = req
        if(!name || !psd){ 
        res.send('参数错误!')
        return
        }
        let list = await create({name,psd,is_hidden,create_at,updata_at},"user")
        res.send(list[list.length-1])
    })),
    // 登录
    login:router.post('/api/login',(async (req,res)=>{
        const {body:{name="",psd=""}} = req
        if(!psd || !name){ 
        res.send('参数错误!')
        return
        }
        let list = await query("user")
        let nowUser = _.find(list,{name,psd})
        if(nowUser){
        nowUser.token = await setToken(nowUser.name,nowUser.id)
        res.send(nowUser)
        }else{
        res.send('查无此人')
        return
        }
    }))
}