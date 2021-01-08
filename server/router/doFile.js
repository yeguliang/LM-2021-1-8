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
// 获取数据
exports.find = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(dbpath,'utf-8',(err,data)=>{
            if(err){
               reject(err)
            }
            resolve(JSON.parse(data).students)
        })
    })
}
// 添加保存数据
exports.save = (student)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(dbpath,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
           let students = JSON.parse(data).students
           students.push(student)
           let ret = JSON.stringify({
               students:students
           })
            fs.writeFile(dbpath,ret,(err)=>{
                if(err){
                    reject(err)
                }
            resolve()
            })
        })
    })    
}
// 更新
exports.updata = ()=>{

}
// 删除
exports.delete = ()=>{

}