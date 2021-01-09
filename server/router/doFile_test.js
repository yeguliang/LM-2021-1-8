const dbpath = './model/db.json'
const fs = require('fs')
// // 获取数据
// exports.find = (callback)=>{
//      fs.readFile(dbpath,'utf-8',(err,data)=>{
//         if(err){
//             return callback(err)
//         }
//         callback(null,JSON.parse(data).students)
//     })
// }
// // 添加保存数据
// exports.save = (student,callback)=>{
//     console.log("5")
//     fs.readFile(dbpath,'utf-8',(err,data)=>{
//         if(err){
//             return callback(err)
//         }
//        let students = JSON.parse(data).students
//        students.push(student)
//        let ret = JSON.stringify({
//            students:students
//        })

       
//        fs.writeFile(dbpath,ret,(err,data)=>{
//            if(err){
//                return callback(err)
//            }
//            callback(data)
//        })
//     })
// }

// // 获取数据
// exports.find = (type)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(dbpath,'utf-8',(err,data)=>{
//             if(err){
//                reject(err)
//             }
//             resolve(JSON.parse(data)[type])
//         })
//     })
// }
// // 添加保存数据
// exports.save = (student)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(dbpath,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//            let students = JSON.parse(data).students
//            students.push(student)
//            let ret = JSON.stringify({
//                students:students
//            })
//             fs.writeFile(dbpath,ret,(err)=>{
//                 if(err){
//                     reject(err)
//                 }
//             resolve()
//             })
//         })
//     })    
// }
// // 更新
// exports.updata = ()=>{

// }
// // 删除
// exports.delete = ()=>{

// }
// 获取数据
const getDate = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(dbpath,'utf-8',(err,data)=>{
            if(err){
               reject(err)
            }
            resolve(JSON.parse(data))
        })
    })
}
const save = (data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(dbpath,JSON.stringify(data),(err)=>{
            if(err){
                reject(err)
            }
        resolve(data)
        })
    })
}

// 获取数据
exports.query = async (type)=>{
    let db = await getDate()
    return db[type]
}
// 添加
exports.creat = async (data,type)=>{
    let db = await getDate()
    db[type].push(data)
    let now = await save(db)
    return now[type]
}
// 更新
exports.updata = ()=>{

}
// 删除
exports.delete = ()=>{

}