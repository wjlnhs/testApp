/**
 * Created by jialin on 2016/7/17.
 */
define(function(require){
    var cajax=require('../common/cajax.js').cajax;
    var initIndex=function(){
        this.elements=function(){
            this.$regbtn= $('#reg');
            this.$loginbtn= $('#login');
            this.$regusername= $('#regusername');
            this.$regpassword=$('#regpassword');
            this.$myModal=$('#myModal');
            this.$logoutbtn=$('#logout');
        }
        this.init=function(){
            var This=this;
            this.elements();
            this.initEvent();
            this.uploader=this.uploaderInit();
        }
        this.uploaderInit=function(){
            var uploader = new WebUploader.Uploader({
                swf: '/plug/webuploader/Uploader.swf',
                server: '/ajaxusers/uploadHeadImage',
                pick: '#upload',
                dnd: '#uploadModal',
                resize: false,
                fileNumLimit: 1,
                fileSizeLimit: 5 * 1024 * 1024,    // 200 M
                fileSingleSizeLimit: 1 * 1024 * 1024    // 50 M
                // 其他配置项
            });
            uploader.on('uploadSuccess',function(file,response ){
                 uploader.reset();
                console.log(response)
            })
            uploader.on('uploadProgress',function(file,percentage){

                console.log(percentage)
            })
            uploader.on('fileQueued',function(file,response ){
                uploader.upload()
            })
            return uploader;
        }
        this.initEvent=function(){
            var This=this;
            $('[type="reg"],[type="login"]').on('click',function(){
                var _type=$(this).attr('type');
                This.$myModal.find('.modal-title').text(_type=='reg' ? '注册' : '登入');
                This.$myModal.attr('modeltype',_type);
                This.$myModal.modal('show');
            })
            this.$loginbtn.on('click',function(){
                var regusername=This.$regusername.val();
                var regpassword=This.$regpassword.val();
                cajax({
                    type: "POST",
                    url: "/ajaxusers/login",
                    data: {
                        user:{
                            name:regusername,
                            password:regpassword
                        }
                    },
                    callback:function(data){
                        console.log(data);
                        swal({
                            title: "登入成功",
                            timer: 1000
                        });
                        setTimeout(function(){
                            This.$myModal.modal('hide');
                            window.location.reload();
                        },500)
                    }
                })
            })
            this.$regbtn.on('click',function(){
                var regusername=This.$regusername.val();
                var regpassword=This.$regpassword.val();
                cajax({
                    type: "POST",
                    url: "/ajaxusers/saveuser",
                    data: {
                        user:{
                            name:regusername,
                            password:regpassword
                        }
                    },
                    callback:function(data){
                        swal({
                            title: "注册成功",
                            showConfirmButton: false,
                            timer: 1000
                        });
                        setTimeout(function(){
                            This.$myModal.modal('hide');
                        },500)
                    }
                })
            }),
            this.$logoutbtn.on('click',function(){
                cajax({
                    type: "POST",
                    url: "/ajaxusers/logout",
                    data: {

                    },
                    callback:function(data){
                        swal({
                            title: "退出成功",
                            showConfirmButton: false,
                            timer: 1000
                        });
                        setTimeout(function(){
                            window.location.reload()
                        },500)
                    }
                })
            })
        }
    }
    new initIndex().init();
})