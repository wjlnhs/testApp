(function($) {
  $.fn.popt = function(options) {
    var e= this;
    //console.log(e);
    var def={
      loading:0,
      toast:0,
      dialog:0,
      title:'',
      wenb:'',
      diature:0,
      diaflase:0,
      afclose:function(){
        //  console.log("close");
      }
    }
     e= $.extend({},def,options);
             // console.log(e,e.loading);
             //是否有loading
             var maskstr="<div class='kin-mask'></div>";
             var loadstr=maskstr+"<div class='weui_toast'>"+
                 "<div class='weui_loading'>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_0'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_1'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_2'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_3'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_4'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_5'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_6'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_7'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_8'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_9'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_10'></div>"+
                 "<div class='weui_loading_leaf weui_loading_leaf_11'></div>"+
                 "</div><p class='weui_toast_content'>数据加载中</p></div>";
             if(e.loading==1){
                 $("body").append(loadstr);
                 //回调
                 e.afclose();
             }
             //弹出完成
             var toast="<div id='toast'>"+
                 "<div class='weui_mask_transparent'></div>"+
                 "<div class='weui_toast'>"+
                 "<i class='weui_icon_toast'></i>"+
                 "<p class='weui_toast_content'>已完成</p>"+
                 "</div>"+
                 "</div>";
             if(e.toast=="1"){
                 $("body").append(toast);
                 setTimeout(function () {
                     $(".kin-mask").remove();
                     $('#toast').remove();
                 }, 2000);
                 //回调
                 e.afclose();
             }
             //弹出对话框
             if(e.dialog=="1"){
                 var diastr="<div class='kin-mask-b'></div>";
                 diastr=diastr+"<div class='weui-all'><div class='weui_dialog'>"+
                     "<div class='weui_dialog_hd'><strong class='weui_dialog_title'>"+e.title+"</strong></div>"+
                     "<div class='weui_dialog_bd'>"+e.wenb+"</div>";
                 if(e.diature=="1"){
                     diastr=diastr+"<div class='weui_dialog_ft'>"+
                         "<a href='javascript:;' class='weui_btn_dialog primary'>确定</a>";
                 }
                 if(e.diaflase=="1"){
                     diastr=diastr+"<a href='javascript:;'' class='weui_btn_dialog default'>取消</a>"
                 }
                 diastr=diastr+"</div></div>";
                 $("body").append(diastr);
                 //回调
                 $(".primary").click(function(){
                     $(".kin-mask-b").remove();
                     $(".weui_dialog").remove();
                     e.afclose();
         })
         $(".default").click(function(){
            $(".kin-mask-b").remove();
            $(".weui_dialog").remove();
         })
      }
   }
})(jQuery);
$(function(){
   $("body").append('<style>.weui_loading_leaf{position:absolute;top:-1px;opacity:.25}.weui_loading{position:absolute;width:0;z-index:1;left:50%;top:38%}.weui_loading_leaf:before{content:" ";position:absolute;width:8.14px;height:2.08px;background:#d1d1d5;box-shadow:rgba(0,0,0,.0980392) 0 0 1px;border-radius:1px;-webkit-transform-origin:left 50% 0;transform-origin:left 50% 0}.weui_loading_leaf_0{-webkit-animation:opacity-60-25-0-12 1.25s linear infinite;animation:opacity-60-25-0-12 1.25s linear infinite}.weui_loading_leaf_0:before{-webkit-transform:rotate(0) translate(7.92px,0);transform:rotate(0) translate(7.92px,0)}.weui_loading_leaf_1{-webkit-animation:opacity-60-25-1-12 1.25s linear infinite;animation:opacity-60-25-1-12 1.25s linear infinite}.weui_loading_leaf_1:before{-webkit-transform:rotate(30deg) translate(7.92px,0);transform:rotate(30deg) translate(7.92px,0)}.weui_loading_leaf_2{-webkit-animation:opacity-60-25-2-12 1.25s linear infinite;animation:opacity-60-25-2-12 1.25s linear infinite}.weui_loading_leaf_2:before{-webkit-transform:rotate(60deg) translate(7.92px,0);transform:rotate(60deg) translate(7.92px,0)}.weui_loading_leaf_3{-webkit-animation:opacity-60-25-3-12 1.25s linear infinite;animation:opacity-60-25-3-12 1.25s linear infinite}.weui_loading_leaf_3:before{-webkit-transform:rotate(90deg) translate(7.92px,0);transform:rotate(90deg) translate(7.92px,0)}.weui_loading_leaf_4{-webkit-animation:opacity-60-25-4-12 1.25s linear infinite;animation:opacity-60-25-4-12 1.25s linear infinite}.weui_loading_leaf_4:before{-webkit-transform:rotate(120deg) translate(7.92px,0);transform:rotate(120deg) translate(7.92px,0)}.weui_loading_leaf_5{-webkit-animation:opacity-60-25-5-12 1.25s linear infinite;animation:opacity-60-25-5-12 1.25s linear infinite}.weui_loading_leaf_5:before{-webkit-transform:rotate(150deg) translate(7.92px,0);transform:rotate(150deg) translate(7.92px,0)}.weui_loading_leaf_6{-webkit-animation:opacity-60-25-6-12 1.25s linear infinite;animation:opacity-60-25-6-12 1.25s linear infinite}.weui_loading_leaf_6:before{-webkit-transform:rotate(180deg) translate(7.92px,0);transform:rotate(180deg) translate(7.92px,0)}.weui_loading_leaf_7{-webkit-animation:opacity-60-25-7-12 1.25s linear infinite;animation:opacity-60-25-7-12 1.25s linear infinite}.weui_loading_leaf_7:before{-webkit-transform:rotate(210deg) translate(7.92px,0);transform:rotate(210deg) translate(7.92px,0)}.weui_loading_leaf_8{-webkit-animation:opacity-60-25-8-12 1.25s linear infinite;animation:opacity-60-25-8-12 1.25s linear infinite}.weui_loading_leaf_8:before{-webkit-transform:rotate(240deg) translate(7.92px,0);transform:rotate(240deg) translate(7.92px,0)}.weui_loading_leaf_9{-webkit-animation:opacity-60-25-9-12 1.25s linear infinite;animation:opacity-60-25-9-12 1.25s linear infinite}.weui_loading_leaf_9:before{-webkit-transform:rotate(270deg) translate(7.92px,0);transform:rotate(270deg) translate(7.92px,0)}.weui_loading_leaf_10{-webkit-animation:opacity-60-25-10-12 1.25s linear infinite;animation:opacity-60-25-10-12 1.25s linear infinite}.weui_loading_leaf_10:before{-webkit-transform:rotate(300deg) translate(7.92px,0);transform:rotate(300deg) translate(7.92px,0)}.weui_loading_leaf_11{-webkit-animation:opacity-60-25-11-12 1.25s linear infinite;animation:opacity-60-25-11-12 1.25s linear infinite}.weui_loading_leaf_11:before{-webkit-transform:rotate(330deg) translate(7.92px,0);transform:rotate(330deg) translate(7.92px,0)}.weui_dialog{position:fixed;z-index:5000;width:85%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#FAFAFC;text-align:center;border-radius:3px;overflow:hidden}.kin-mask{width:100%;height:100%;position:absolute;z-index:200;left:0;top:0;background:#f1f1f1;opacity:.3}.kin-mask-b{position:fixed;z-index:100;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6)}.weui_dialog_hd{padding:1.2em 20px .5em}.weui_dialog_title{font-weight:400;font-size:17px}.weui_dialog_bd{padding:0 20px 20px 20px;font-size:15px;color:#888;word-wrap:break-word;word-break:break-all}.weui_dialog_ft{position:relative;line-height:42px;margin-top:20px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.weui_dialog_ft a{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3CC51F;text-decoration:none;-webkit-tap-highlight-color:transparent}.weui_btn_dialog.default{color:#353535}.weui_dialog_ft a:after{content:" ";position:absolute;left:0;top:0;width:1px;height:100%;border-left:1px solid #D5D5D6;color:#D5D5D6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui_dialog_ft a{position:relative;line-height:42px}.weui_dialog_ft:after{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #D5D5D6;color:#D5D5D6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-all{max-width:640px;position:absolute;left:50%;top:0;height:100%;transform:translateX(-50%);z-index:150}.weui_toast{position:fixed;z-index:50000;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:rgba(40,40,40,.75);text-align:center;border-radius:5px;color:#FFF}.weui_toast_content{margin-top:64%;font-size:14px}@-webkit-keyframes opacity-60-25-0-12{0%{opacity:.25}0.01%{opacity:.25}0.02%{opacity:1}60.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-1-12{0%{opacity:.25}8.34333%{opacity:.25}8.35333%{opacity:1}68.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-2-12{0%{opacity:.25}16.6767%{opacity:.25}16.6867%{opacity:1}76.6767%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-3-12{0%{opacity:.25}25.01%{opacity:.25}25.02%{opacity:1}85.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-4-12{0%{opacity:.25}33.3433%{opacity:.25}33.3533%{opacity:1}93.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-5-12{0%{opacity:.270958333333333}41.6767%{opacity:.25}41.6867%{opacity:1}1.67667%{opacity:.25}100%{opacity:.270958333333333}}@-webkit-keyframes opacity-60-25-6-12{0%{opacity:.375125}50.01%{opacity:.25}50.02%{opacity:1}10.01%{opacity:.25}100%{opacity:.375125}}@-webkit-keyframes opacity-60-25-7-12{0%{opacity:.479291666666667}58.3433%{opacity:.25}58.3533%{opacity:1}18.3433%{opacity:.25}100%{opacity:.479291666666667}}@-webkit-keyframes opacity-60-25-8-12{0%{opacity:.583458333333333}66.6767%{opacity:.25}66.6867%{opacity:1}26.6767%{opacity:.25}100%{opacity:.583458333333333}}@-webkit-keyframes opacity-60-25-9-12{0%{opacity:.687625}75.01%{opacity:.25}75.02%{opacity:1}35.01%{opacity:.25}100%{opacity:.687625}}@-webkit-keyframes opacity-60-25-10-12{0%{opacity:.791791666666667}83.3433%{opacity:.25}83.3533%{opacity:1}43.3433%{opacity:.25}100%{opacity:.791791666666667}}@-webkit-keyframes opacity-60-25-11-12{0%{opacity:.895958333333333}91.6767%{opacity:.25}91.6867%{opacity:1}51.6767%{opacity:.25}100%{opacity:.895958333333333}}</style>');
})

