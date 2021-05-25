const express = require('express')
const path = require('path');
const fs = require('fs');
// path.join(__dirname, './../../file')
const file = express.Router()
const {
    queryList,
    create,
    updata,
    find,
    remove
} = require('./../doFile');
const _ = require('lodash');
const moment = require('moment');
const asyncHandler = require('./../../utils/asyncHandler')

// 注册
file.post('/api/file_upload', asyncHandler(async (req, res) => {
        const {
            user_info
        } = req
        fs.readFile(req.files[0].path, function (err, data) {
            if (err) {
                console.log('Error');
            } else {
                var dir_file = path.join(__dirname, './../../public/static/') + user_info.id + moment(new Date()).valueOf() + '.' + req.files[0].originalname.split('.')[1]
                fs.writeFile(dir_file, data, function (err) {
                    var obj = {
                        msg: 'upload success',
                        filename: `http://${process.env.HOST}:${process.env.PORT}${dir_file.split('public')[1]}`.replace(/\\/ig, "\/")
                    }
                    console.log(obj);
                    res.send(JSON.stringify(obj));
                })
            }
        })
    })),

    module.exports = file