var express = require('express');
var session=require('express-session');
var routes = require('./routes/mainRoutes');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
//global.console=function(){};
//global.console.log=function(){};
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(multer({ dest: './buffer/'}))//上传配置https://cnodejs.org/topic/53d655d158cac416711d85ad
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret:"wjlnhs",saveUninitialized: true,resave: true}));
//app.use(session({secret:"i8xiaoshi",saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, 'public')));

//mongodb
global.db = mongoose.createConnection('localhost','test');

db.on('error',function(){
    console.log('连接错误')
  //  console.error.bind(console,'连接错误:')
});
db.once('open',function(){
    console.log('mongodb已经连接')
    //一次打开记录
});
//未登录检测
//app.use(function (req, res, next) {
//    var url = req.originalUrl;
//    var authReg=/^\/[main|design]\S*/g;
//    if(authReg.test(url)&&!req.cookies.u){
//        return res.redirect("/?error=unlogin");
//    }
//    contextSetting(req,res,next);
//});
routes.use(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            layout:false
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        layout:false
    });
});

module.exports = app;
