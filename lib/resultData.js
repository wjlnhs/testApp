var _=require('underscore');
var info_cn = require('../config/info_cn');
var Check=function(data){

    var translateCode=function(c){
        return info_cn['c'+c]||'';
    }
    return _.extend(data,{
        Code:data.Code,
        Result:data.Code==0,
        Description:translateCode(data.Code)
    });
}
exports.Check=Check;