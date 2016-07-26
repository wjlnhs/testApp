var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var userInfo=req.session.user ||{};
    res.render('index', { title: 'Express' ,userInfo:userInfo,userInfostr:JSON.stringify(userInfo)});
});
router.get('/ddd', function(req, res) {
    var userInfo=req.session.user ||{};
    res.render('index', { title: 'Express' ,userInfo:userInfo,userInfostr:JSON.stringify(userInfo)});
});

module.exports = router;
