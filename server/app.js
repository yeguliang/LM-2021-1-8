const express = require('express')
const app = express()
const routes = require('./router/index.js')
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const vertoken = require('./router/token_vertify.js');
const expressJwt = require('express-jwt');
const parseurl = require('parseurl')
// const routes2 = require('./router/index2.js')

// 端口号
const port = 3001

app.use((req, res, next)=>{
	let token = req.headers['authorization'];
	if(token == undefined){
		return next();
	}else{
		vertoken.verToken(token).then((data)=> {
			req.data = data;
			return next();
		}).catch((error)=>{
			return next();
		})
	}
});

//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
	secret: 'mes_qdhd_mobile_xhykjyxgs'
}).unless({
	path: ['/login','/api']//除了这个地址，其他的URL都需要验证
}));

//当token失效返回提示信息
app.use((err, req, res, next)=>{
	if (err.status == 401) {
		return res.status(401).send('token失效');
	}
});



// session
app.use(session({
    secret: 'keyboard cat',
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
app.use(routes)
// app.use(routes2)

// 静态资源
// 相对路径
// app.use("/pubilc/",express.static('./public/')) 
// __dirname:动态获取当前文件模块所属目录的绝对路径（文件父级绝对的路径）
// __filename：动态获取当前文件的绝对的路径（文件绝对的路径）
// 绝对路径 
app.use("/pubilc/",express.static(path.join(__dirname,'./public/')))  



// 监听
app.listen(port,()=>{
    console.log(`APP URL: http://127.0.0.1:${port}`)
})