var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../../model/user.js').Models.User;
var multiparty = require('multiparty');
var router = express.Router();
var resultData=require('../../lib/resultData').Check;
var _=require('underscore');
var path=require('path');
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
router.post('/logout', function(req, res) {
    req.session.user=null;
    result=resultData({result:true, Code:0})
    res.json(result)
});

router.post('/uploadHeadImage', function(req, res) {
    console.log(__dirname)
    var form = new multiparty.Form({uploadDir: path.join(__dirname,'../../uploads/headImage')});
    form.parse(req, function(err, fields, files) {
        var _path=files.file[0].path;
        _path=_path.split('uploads')[1];
       _path=_path.replace(/\\/g,'/').replace('../uploads','');
        UserModel.update({_id: req.session.user._id},{$set:{headImage:_path}},function(err){
            if(!err){
                result=resultData({result:true, Code:0,path:_path});
                req.session.user.headImage=_path
                res.json(result)
            }else{
                result=resultData({result:true, Code:999,path:_path})
                res.json(result)
            }
        });

    })

});


module.exports = router;
