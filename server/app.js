const express = require('express')

const routes = require('./router/index.js')
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const expressJwt = require('express-jwt');
const parseurl = require('parseurl')
const cors = require('cors'); 
const logger = require('morgan');
const xss = require('xss-clean')
const helmet = require('helmet')
// const routes2 = require('./router/index2.js')
const { verToken } = require('./utils/toke');
require('dotenv').config()
const hpp = require('hpp')
const app = express()

// Prevent XSS attacks
// Set security headers
app.use(helmet())
app.use(xss())
app.use(cors()); 
app.use(hpp())
app.use(logger('dev'));
app.use((req, res, next)=>{
	// console.log('tokendata',signkey)
	let token = req.headers['authorization'];
	let {query,body} = req
	// req.param_body =  {...query,...body}
	if(!token){
		return next();
	}else{
		verToken(token).then((data)=> {
			req.user_info = data;
			// console.log('tokendata',process.env.APP_KEY)
			return next();
		}).catch((error)=>{
			// console.log(error)
			return next();
		})
	}
});

//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
	secret: process.env.APP_KEY
}).unless({
	path: ['/api/login','/api/register','/api/login/mailer', '/api/reset']//除了这个地址，其他的URL都需要验证
}));


// session
app.use(session({
    secret: process.env.APP_KEY,
    // 加密字符串在原有的字符串上面拼接
    // 安全
    resave: false,
    saveUninitialized: true
    // 无论你用不用session,都会给你配置
}))


  
app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {}
    }
    // get the url pathname
    var pathname = parseurl(req).pathname
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    next()
})


// 模板引擎
// app.engine('art', require('express-art-template'));
// app.engine('html', require('express-art-template'));



// 除了get其他请求方法获取body数据
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// 路由
// routes(app)
routes.forEach((item)=>{
	return app.use(item)
})
// app.use(routes2)

//当token失效返回提示信息
app.use((err, req, res, next)=>{
	console.log(err)
	if (err.status == 401) {
		return res.status(401).send('token失效');
	}
	return res.status(500).send('服务端错误！');
});
// 静态资源
// 相对路径
// app.use("/pubilc/",express.static('./public/')) 
// __dirname:动态获取当前文件模块所属目录的绝对路径（文件父级绝对的路径）
// __filename：动态获取当前文件的绝对的路径（文件绝对的路径）
// 绝对路径 
app.use("/pubilc/",express.static(path.join(__dirname,'./public/')))  

// 监听
app.listen(process.env.PORT,()=>{
    console.log(`APP URL: http://${process.env.HOST}:${process.env.PORT}`)
})