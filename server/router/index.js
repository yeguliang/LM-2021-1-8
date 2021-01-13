const fs = require('fs')
const express = require('express')
const router = express.Router()
const {query,create,updata,find,remove} = require('./doFile');
const _ = require('lodash');
const moment = require('moment');
const { verToken,setToken} = require('./../utils/toke');
const user = require('./user/user')
const article = require('./article/article')


router.all('*', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  // console.log(1)
  next();
});


module.exports = [router,user,article]
