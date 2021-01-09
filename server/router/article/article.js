const express = require('express')
const router = express.Router()
const {query,create,updata,find,remove} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const {setToken} = require('./../../utils/toke');
exports.article = {
    // 获取文章列表
    get:router.get('/api/article',(async (req,res) => {
    let list = await query("article")
    res.send(list)
    })),
    // 创建文章
    create:router.post('/api/article',(async (req,res) => {
    const {body:{title="",des="",is_hidden=false,create_at = moment(new Date()).format(),updata_at=moment(new Date()).format()}} = req
    if(!title || !des){ 
        res.send('参数错误!')
        return
    }
    let list = await create({title,des,is_hidden,create_at,updata_at},"article")
    res.send(list)
    })),

    // 更新文章
    updata:router.put('/api/article',(async (req,res) => {
    let {body} = req
    body.id = body.id*1
    let org = await find(body.id*1,"article")
    // console.log('=>org',org)
    let list = await updata({...org,...body,updata_at:moment(new Date()).format()},"article")
    res.send(list)
    })),
    // 删除
    remover:router.delete('/api/article',(async (req,res) => {
    let {body} = req
    body.id = body.id*1
    let org = await find(body.id,"article")
    let list = await updata({...org,is_hidden:true,updata_at:moment(new Date()).format()},"article")
    // let list = await remove(id,"article")
    res.send(list)
    }))
}