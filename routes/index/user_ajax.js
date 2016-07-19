var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('../../model/user.js').Models.User;
var router = express.Router();

/* GET users listing. */
router.post('/saveuser', function(req, res) {
    var _user=req.body.user || {};
    UserModel.create2(_user,function(err,user){
        if(err){
            res.json({
                Code:999,
                err:err
            })
        }else{
            res.json(user)
        }
    })
});

module.exports = router;
