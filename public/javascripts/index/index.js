/**
 * Created by jialin on 2016/7/17.
 */
var initIndex=function(){
    this.elements=function(){
       this.$regbtn= $('#reg');
       this.$regusername= $('#regusername');
       this.$regpassword=$('#regpassword')
    }
    this.init=function(){
        var This=this;
        this.elements();
        this.$regbtn.on('click',function(){
            var regusername=This.$regusername.val();
            var regpassword=This.$regpassword.val();
            $.ajax({
                type: "POST",
                url: "/ajaxusers/saveuser",
                dataType: "json",
                data: {
                    user:{
                        name:regusername,
                        password:regpassword
                    }
                },
                success:function(data){
                    console.log(data)
                }
            })
        })
    }
}
new initIndex().init();