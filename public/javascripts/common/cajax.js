define(function(require,exports){
    var cajax=function(options){
        var parms={
            type:'get',
            dataType:'json',
            cache:false,
            resultType:'success',
            data:{}
        }
        options= $.extend(parms,options);
        var $subBtn=options.btn,
             resultType=options.resultType,
             box=options.box,
             btnTagName='button';
        if($subBtn){
            btnTagName=$subBtn.prop("tagName").toLowerCase();
            if( btnTagName=='button'){
                $subBtn.attr('disabled','disabled');
            }else{
                $subBtn.addClass('disabled');
            }
            var oldTxt=$subBtn.text();
        }
        $.ajax({
            url: options.url,
            type: options.type,
            dataType: options.dataType,
           // data:options.type=='get'?{options:options.data}:{options:JSON.stringify(options.data)},
            data:options.data,
            cache:options.cache,
            beforeSend:options.beforeSend,
            complete:function(){
                if($subBtn){
                    if( btnTagName=='button'){
                        $subBtn.attr('disabled','disabled');
                    }else{
                        $subBtn.addClass('disabled');
                    }
                }
                options.complete && options.complete()
            },
            success: function (data) {
                //如果是success过滤错误弹出错误或者将错误渲染到div
                if(resultType=='success'){
                    if(!data.Code){
                        options.callback && options.callback(data)//输出过滤了错的data
                    }else{
                        if(box){
                            $(box).html(data.Description);//渲染到div
                        }else{
                            swal({
                                title: data.Description,
                                showConfirmButton: false,
                                timer: 1000
                            });
                            //i8ui.error(data.Description);//输出错误
                        }
                    }
                }else{
                    options.callback && options.callback(data);////输出没有过滤错误的data
                }
            }, error: function (error) {
                if(resultType=='success'){ //如果是success过滤错误弹出错误或者将错误渲染到div
                    if(box){
                        $(box).html('网络异常，请重试！');//渲染到div
                    }else{
                        swal({
                            title: data.Description,
                            showConfirmButton: false,
                            timer: 1000
                        });
                       // i8ui.error('网络异常，请重试！')//输出错误
                    }
                }else{
                    options.callback && options.callback({Result:false,Description:'网络异常，请重试！',Code:-1});
                }
            }
        });
    }
    exports.cajax=cajax;
})
