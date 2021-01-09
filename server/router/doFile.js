const dbpath = './model/db.json'
const fs = require('fs')
const _ = require('lodash');
  // 获取数据
const getDate=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(dbpath,'utf-8',(err,data)=>{
            if(err){
            reject(err)
            }
            resolve(JSON.parse(data))
        })
    })
}
// 保存数据
const save = (data) => {
    return new Promise((resolve,reject)=>{
        fs.writeFile(dbpath,JSON.stringify(data),(err)=>{
            if(err){
                reject(err)
            }
        resolve(data)
        })
    })
}
exports.find = async (id,type) => {
    let db = await getDate()
    return _.find(db[type],{id:id})
}
exports.queryList = async (type) => {
    let db = await getDate()
    return _.filter(db[type],{is_hidden:false})
}
exports.create = async (data,type) => {
    let db = await getDate()
    data.id = db[type].length
    db[type].push(data)
    let now = await save(db)
    return _.filter(now[type],{is_hidden:false})
}
exports.updata = async (data,type) => {
    let db = await getDate()
    let index = _.findIndex(db[type], { 'id': data.id});
    console.log('index',db,data.id,index)
    db[type][index] = {...db[type][index],...data}
    let now = await save(db)
    return _.filter(now[type],{is_hidden:false})
}
exports.remove = async (id,type) => {
    let db = await getDate()
    _.remove(db[type],(item)=>{
        return id == item.id;
    });
    let now = await save(db)
    return _.filter(now[type],{is_hidden:false})
}