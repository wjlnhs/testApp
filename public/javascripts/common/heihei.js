(function(e) {
    var t = '<style type="text/css">*{margin:0px;padding:0px;}#floatOverlay{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}.floatOverlay_noback .MAINL,.floatOverlay_noback .MAINR,.floatOverlay_noback .MAINM,.floatOverlay_noback .BUTCLOSE,.floatOverlay_noback .BE,.floatOverlay_noback .B_R,.floatOverlay_noback .BET{background:none;}.floatOverlay{margin:0px auto;z-index:2100;position:fixed;padding-top:17px;}.MAIN_FloatBox{float:left;width:100%;}.MAINL,.MAINR{float:left;width:12px;background:url(http://img.24quba.net/float/mid_bg.png) left top repeat-y;}.MAINR{float:right;background-position:right top;}.MAINM{float:left;background:#fff;}.BUTCLOSE{width:33px; height:33px; position:absolute; top:10px; right:-7px;background:url(http://img.24quba.net/float/t_close.png) left top no-repeat;}.BE,.B_R,.BET{float:left;width:49.99%;border:0px;height:18px;background:url(http://img.24quba.net/float/bg_BE.png) repeat-x left -18px;}.BET{background-position:left top;}.T_R {background-position:right top;}.B_R{background-position:right -18px;}</style>';
    e("head").append(t);
    var n = null ;
    e.fn.jQueryFloatBox = function(t) {
        $().jQueryFloatBox.close(),
            t = e.extend({}, e.fn.jQueryFloatBox.Default, t),
            e.fn.jQueryFloatBox.d = t;
        var n = "";
        t.hadBack || (n = "floatOverlay_noback");
        var r = "";
        t.canClose && (r = '<a href="javascript:void(0)" class="BUTCLOSE"></a>');
        var i = '<div id="floatOverlay" class="mustRemove"></div><div class="floatOverlay width_ mustRemove  ' + n + '">' + r + '<div class="BET"></div><div class="BET T_R"></div><div class="MAIN_FloatBox Height width_"><div class="MAINL Height"></div><div class="MAINM Height"></div><div class="MAINR Height"></div></div><div class="BE"></div><div class="bottom B_R"></div><div style="clear:both;"></div></div>';
        return e("body").append(i),
            e.fn.jQueryFloatBox.inner = this.clone(!0),
            this.show(),
            $(".MAINM").append(this),
            e.fn.jQueryFloatBox.o = {
                bg: e("#floatOverlay"),
                h: e(".Height"),
                m: e(".MAINM")
            },
            e.fn.jQueryFloatBox.setPosition(t),
            e.fn.jQueryFloatBox.bind(t),
            this
    }
        ,
        e.fn.jQueryFloatBox.Default = {
            opacity: .3,
            hadBack: !0,
            canClose: !0,
            afterClose: ""
        },
        e.fn.jQueryFloatBox.d = {
            opacity: .3,
            hadBack: !0,
            canClose: !0,
            afterClose: ""
        },
        e.fn.jQueryFloatBox.setPosition = function() {
            var t = e(window).width()
                , n = e(window).height()
                , r = e(window).scrollTop()
                , i = e("body").width();
            bodyH = e("body").height(),
                i = t > i ? t : i,
                bodyH = n > bodyH ? n : bodyH,
                e.fn.jQueryFloatBox.o.bg.width(i).height(bodyH - 1).css("opacity", e.fn.jQueryFloatBox.d.opacity);
            var s = e(".MAINM").children().height()
                , o = e(".MAINM").children().width();
            e.fn.jQueryFloatBox.o.h.height(s),
                e.fn.jQueryFloatBox.o.m.width(o),
                e(".width_").width(o + 24);
            var u = (t - o) / 2;
            u = u < 0 ? 0 : u;
            var a = parseInt($(".floatOverlay").height())
                , f = (n - s) / 2;
            $(".floatOverlay").css({
                left: u,
                top: f
            })
        }
        ,
        e.fn.jQueryFloatBox.bind = function(t) {
            e(window).resize(e.fn.jQueryFloatBox.setPosition),
                e("body").resize(e.fn.jQueryFloatBox.setPosition),
                t.canClose ? e("#floatOverlay").live("click", e.fn.jQueryFloatBox.close) : e("#floatOverlay").die("click"),
                e(".BUTCLOSE").live("click", e.fn.jQueryFloatBox.close),
                e(t.btn_close).live("click", e.fn.jQueryFloatBox.close)
        }
        ,
        e.fn.jQueryFloatBox.close = function() {
            $("body").append(e.fn.jQueryFloatBox.inner),
                $(".mustRemove").remove();
            var t = e.fn.jQueryFloatBox.d.afterClose;
            typeof t == "function" && t()
        }
})(jQuery)
