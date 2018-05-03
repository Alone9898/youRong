var a;
$(function(){
    (function($){
        $('.state .checkbox').change(function(){
           if(this.checked){
               $(this).attr('checked','checked');
           }else{
               $(this).attr('checked','');
           }
        });
        //cookie
        $.cookies=function(obj,name,id){
            $(obj).click(function(){
                var value=$(id).val();
                $.cookie(name, value, { expires: 1 });
                $('.name-title').html("欢迎来到装修加速平台，<a href='pages/Personalcenter/myFocus.html'>"+a[0].value+"</a>");
            });
            var cookie=  $.cookie(name);
            a=$(id).val(cookie);
            if(cookie){
                $('.name-title').html("欢迎来到装修加速平台，<a href='pages/Personalcenter/myFocus.html'>"+a[0].value+"</a>");
                if($('.state .checkbox').attr('checked')!=''){
                    console.log(cookie);
                }
            }
        }
    }($));
    $.cookies('.login','cookieName','.type_text');
    //固定左边
    $(window).scroll(function(){
        if($('.leftlist').length>0){
            var top = $('.leftlist').offset().top;
            var scrolltop = $(window).scrollTop();
            if(scrolltop>top){
                $('.fixdnone').hide();
                $('.rightmain').css({
                    "position": "fixed",
                    "top": "0",
                    "z-index": "999",
                    "width": "220px",
                })
            }else{
                $('.fixdnone').show();
                $('.rightmain').css({
                    "position": "static",
                })
            }
        }
    })
});
$(function(){
    //定位地址
    var addrstr=returnCitySN['cname'];
    addrstr=addrstr.replace("省"," ");
    addrstr=addrstr.replace("市","");
    $("#addrname").html(addrstr);
    //nav高亮
    var url = window.location.href;
    if(url.indexOf("index")>0){
        $(".sy").css({
            "border-bottom":"4px solid #fff"
        })
        $(".sy a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("designCenter")>0){
        $(".sjzx").css({
            "border-bottom":"4px solid #fff"
        })
        $(".sjzx a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("introduce")>0){
        $(".cpjs").css({
            "border-bottom":"4px solid #fff"
        })
        $(".cpjs a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("brandManage")>0){
        $(".ppzx").css({
            "border-bottom":"4px solid #fff"
        })
        $(".ppzx a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("bid")>0){
        $(".ztb").css({
            "border-bottom":"4px solid #fff"
        })
        $(".ztb a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("bid")>0){
        $(".Projectcenter").css({
            "border-bottom":"4px solid #fff"
        })
        $(".Projectcenter a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("facilitator")>0){
        $(".fws").css({
            "border-bottom":"4px solid #fff"
        })
        $(".fws a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("Aboutus")>0){
        $(".gywm").css({
            "border-bottom":"4px solid #fff"
        })
        $(".gywm a").css({
            "color":"#fff"
        })
    }else if(url.indexOf("Projectcenter")>0){
        $(".xmgl").css({
            "border-bottom":"4px solid #fff"
        })
        $(".xmgl a").css({
            "color":"#fff"
        })
    }
})