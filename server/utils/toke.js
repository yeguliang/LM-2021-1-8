const jwt = require('jsonwebtoken');
exports.setToken = function(username,userid){
	return new Promise((resolve,reject)=>{
        // console.log('process.env.APP_KEY',process.env.APP_KEY)
		const token = jwt.sign({
			name:username,
			_id:userid
		},process.env.APP_KEY,{ expiresIn:60*60*12 });
		resolve(token);
	})
}
exports.verToken = function(token){
	return new Promise((resolve,reject)=>{
        // console.log('process.env.APP_KEY',token)
        var info = jwt.verify(token.split(' ')[1],process.env.APP_KEY);
		resolve(info);
	})
}