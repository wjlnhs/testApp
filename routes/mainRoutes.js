/**
 * Created by jialin on 2016/7/17.
 */
exports.use=function(app){
    var index=require('./index.js');
    var user=require('./index/user.js');
    var ajaxuser=require('./index/user_ajax.js');
    app.use('/', index);
    app.use('/user',user);
    app.use('/ajaxusers',ajaxuser);
}