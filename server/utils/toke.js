const jwt = require('jsonwebtoken');
const {signkey}= require('./../config/config')
require('dotenv').config()
exports.setToken = function(username,userid){
	return new Promise((resolve,reject)=>{
        // console.log('process.env.APP_KEY',process.env.APP_KEY)
		const token = jwt.sign({
			name:username,
			_id:userid
		},signkey,{ expiresIn:60*60*12 });
		resolve(token);
	})
}
exports.verToken = function(token){
	return new Promise((resolve,reject)=>{
        // console.log('process.env.APP_KEY',token)
        var info = jwt.verify(token.split(' ')[1],signkey);
		resolve(info);
	})
}