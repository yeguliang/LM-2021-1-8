const fs = require('fs')
const express = require('express')
const router = express.Router()
const {query,create,updata,find,remove} = require('./doFile');
const _ = require('lodash');
const moment = require('moment');
const { verToken,setToken} = require('./../utils/toke');
const user = require('./user/user')
const article = require('./article/article')

// module.exports = (app)=>{
// // 数据格式utf-8 or toString()
// app.get('/',(req,res)=>{
//   fs.readFile('./model/db.json','utf-8',(err,data)=>{
//       if(err){
//           // connsole.log(err)
//           return res.status(500).send('Server err')
//       }
//       res.send(JSON.parse(data.toString()).student)
//   })
// })
// }



// 本地数据处理

// 回调
// router.get('/',(req,res)=>{
//   // fs.readFile('./model/db.json','utf-8',(err,data)=>{
//   //     if(err){
//   //         // connsole.log(err)
//   //         return res.status(500).send('Server err')
//   //     }
//   //     let studentData = JSON.parse(data.toString()).student
//   //     res.render('./home/home.html' , {
//   //       studentData: studentData
//   //     })
//   // })
//   File.find((err,data)=>{
//     // console.log(data)
//     if(err){
//       return res.status(500).send('server err')
//     }
//     res.render('./home/home.html' , {
//       studentData: data
//     })
//   })
  
// })

// router.post('/creat',(req,res)=>{
//   File.save(req.body,(err)=>{
//     if(err){
//       return res.status(500).send('server err')
//     }
//   File.find((err,data)=>{
//     // console.log(data)
//     if(err){
//       return res.status(500).send('server err')
//     }
//     res.render('./home/home.html' , {
//       studentData: data
//     })
//   })
//   })
// })

// Promise

// router.get('/',(req,res)=>{
//   File.find().then((data)=>{
//     res.render('./home/home.html' , {
//       studentData: data
//     })
//   },(err)=>{
//     res.status(500).send('server err')
//   }) 
// })

// router.post('/',(req,res)=>{
//   File.save(req.body).then((data)=>{
//     File.find().then((data)=>{
//       // res.render('./home/home.html' , {
//       //   studentData: data
//       // })
//       res.send("post")
//     },(err)=>{
//       res.status(500).send('server err')
//     }) 
//   },(err)=>{
//     res.status(500).send('server err')
//   })
// })


// 数据库
// const renderPage = async (req, res, next) => {
//     let folders = req.path.slice(1).split('/')
//     let camelPath = folders.map(v => _.camelCase(v)).join('/') //`${_.camelCase(path)}/${_.camelCase(file)}`
//     try {
//       let result = await show(str)
//       res.render(camelPath, {
//         Data: a 
//       })
//     } catch (e) {}
// }

// router.get('/:path/:file', renderPage)
router.all('*', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

Object.values(user).map((item)=>item)
Object.values(article).map((item)=>item)

module.exports = router
