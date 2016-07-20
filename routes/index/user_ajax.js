var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../../model/user.js').Models.User;
var router = express.Router();
var resultData=require('../../lib/resultData').Check;

/* GET users listing. */
router.post('/saveuser', function(req, res) {
    var _user=req.body.user || {};
    UserModel.create2(_user,function(err,user){
        var result={};
        if(err){
            result=resultData({result:true,Code:990})
        }else{
            result=resultData({result:true, Code:0,ReturnObject:user})
        }
        res.json(result)
    })
});

router.post('/login', function(req, res) {
    var _user=req.body.user || {};
    UserModel.find(_user,function(err,user){
        var result={};
        if(err){
            result=resultData({result:true,Code:990})
        }else{
            if(user.length==0){
                result=resultData({result:true,Code:1001})
            }else{
                req.session.user=user[0];
                result=resultData({result:true, Code:0})
            }
        }
        res.json(result)
    })
});

module.exports = router;
