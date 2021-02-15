const express = require('express')
const article = express.Router()
const {queryList,create,updata,find,remove} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const asyncHandler = require('./../../utils/asyncHandler')

const {setToken} = require('./../../utils/toke');
    // 全部文章
    article.get('/api/article',asyncHandler(async (req,res) => {
        let {query,user_info} = req
        let list = await queryList("article")
        let user_list = await queryList("user")
        //throw new Error('456456')
        list = list.filter((item)=>{
            return item.type === query.type
        }).map((item)=>{
            item.user_info = _.find(user_list,{id:item.user_id})
            return item
        })
        if(query.id){
            query.id *= 1
            res.send(_.find(list,{id:query.id}) || {})
            return
        }
        res.send(list)
    })),
    // 个人文章
    article.get('/api/user/article',asyncHandler(async (req,res) => {
        const {query,user_info} = req
        let list = await queryList("article")
        let user_list = await queryList("user")
        list = _.filter(list,{user_id:user_info._id})
        if(query.type){
            list = _.filter(list,{type:query.type})
        }
        list = list.map((item)=>{
            item.user_info = _.find(user_list,{id:item.user_id})
            return item
        })
        res.send(list)
        })),
    // 创建文章
    article.post('/api/article',asyncHandler(async (req,res) => {
        const {body:{title="",des="",type,is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()},user_info} = req
        if(!title || !des){ 
            res.send('参数错误!')
            return
        }
        let list = await create({title,des,is_hidden,create_at,updata_at,user_id:user_info._id,type},"article")
        res.send(list)
    })),
    // 更新文章
    article.put('/api/article',asyncHandler(async (req,res) => {
        let {body} = req
        body.id = body.id*1
        let org = await find(body.id*1,"article")
        // console.log('=>org',org)
        let list = await updata({...org,...body,updata_at:moment(new Date()).format()},"article")
        res.send(list)
    })),
    // 删除
    article.delete('/api/article',asyncHandler(async (req,res) => {
        let {body} = req
        body.id = body.id*1
        let org = await find(body.id,"article")
        let list = await updata({...org,is_hidden:true,updata_at:moment(new Date()).format()},"article")
        // let list = await remove(id,"article")
        res.send(list)
    }))
    module.exports = article