const jwt = require('jsonwebtoken');
const {signkey}= require('./../config/config')

exports.setToken = function(username,userid){
	return new Promise((resolve,reject)=>{
        // console.log('signkey',signkey)
		const token = jwt.sign({
			name:username,
			_id:userid
		},signkey,{ expiresIn:60*60*12 });
		resolve(token);
	})
}
exports.verToken = function(token){
	return new Promise((resolve,reject)=>{
        // console.log('signkey',token)
        var info = jwt.verify(token.split(' ')[1],signkey);
		resolve(info);
	})
}