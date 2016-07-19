/**
 * Created by jialin on 2016/7/17.
 */
var mongoose = require('mongoose');
var _=require('underscore');
//用户
var user = new mongoose.Schema({
    name:String,   //定义一个属性name，类型为String
    password:String,  //定义一个属性password，类型为String
    creatTime:Date
});
var Models={
    User:db.model('people',user)
}
_.each(Models,function(item){
    item.create2=function(){
        _.extend(arguments[0],{
            "creatTime":new Date().getTime()
        })
        item.create.apply(item,arguments)
    }
})
exports.Models=Models;