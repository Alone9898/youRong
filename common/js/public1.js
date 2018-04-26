//头部
Vue.component('sitenav', {
    template:'<div>\
    <div class="container siteNav">\
        <div class="row clearfix" >\
            <div class="pull-left place" style="margin-right:10px">\
                <div class="dropdown">\
                    <button type="button" class="btn" style="background: none" @click="editaddr()">\
                        <img src="common/img/icon/place.png"/>\
                        <span id="addrname"></span>\
                        <span class="caret"></span>\
                    </button>\
                    <ul class="dropdown-menu myaddr">\
                        <div data-toggle="distpicker" class="linkage" style="text-align: center;">\
                            <select id="pro" data-province="---- 选择省 ----" style="width:120px;margin:5px"></select>\
                            <select id="city" data-city="---- 选择市 ----" style="width:120px;margin:5px"></select>\
                            <a class="btn btn-block btn-ok" @click="editok()">确定</a>\
                            <a class="btn btn-block btn-no" @click="editno()">取消</a>\
                        </div>\
                    </ul>\
                </div>\
            </div>\
            <div class="pull-left siteNav_welcome name-title">欢迎来到装修加速平台，请 <a href="#" @click="modal_tip()">登录</a> | <a href="#">注册</a></div>\
            <div class="pull-right siteNav_welcome siteNav_right">\
              <span class="weixin" @mouseover="wei_img(1)" @mouseout="wei_img(2)">微信公众号</span>\
              <div class="weixin_img" v-show="weixin"><img src="common/img/icon/weixin.jpg" width="120" height="120"></div>\
            </div>\
        </div>\
    </div>\
    <div class="modal_tip"  v-show="isShow" style="display: none">\
        <div class="modal_box">\
            <div class="modal_close">\
                <img @click="modal_close" src="common/img/icon/close.png">\
            </div>\
            <div class="modal_title">账号登录</div>\
            <input type="text" class="form-control user type_text" maxlength="11" placeholder="用户名/手机号/邮箱">\
            <input type="password" class="form-control passWord type_password" placeholder="密码">\
            <div class="state">\
                <input type="checkbox" class="checkbox"><span>下次自动登录</span>\
                <div>忘记密码？</div>\
            </div>\
            <div class="login"><a href="javascript:;" style="display:block;color:#fff;" @click="login()">立即登录</a></div>\
            <div class="register">还没有账号？<span>免费注册</span></div>\
        </div>\
    </div>\
    <div class="l_header">\
        <nav class="navbar navbar-default" role="navigation">\
            <div class="container clearfix">\
                <div class="navbar-header">\
                <img src="common/img/icon/sid.png" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" alt="">\
                    <a href="index.html" class="logo">\
                        <img src="common/img/icon/logo.png">\
                    </a>\
                    <div class="person">\
                        <img src="common/img/icon/ok.png" @click="person()">\
                    </div>\
                </div>\
                <div class="collapse navbar-collapse" id="navbar-menu">\
                    <ul class="nav navbar-nav navbar-left">\
                        <li class="sy"  ><a  href="index.html">首页</a></li>\
                        <li class="cpjs"><a href="pages/introduce/introduce.html">产品介绍</a></li>\
                        <li class="ppzx"><a href="pages/brandManage/business.html">品牌中心</a></li>\
                        <li class="sjzx"><a href="pages/designCenter/decoration.html">设计中心</a></li>\
                        <li class="ztb" ><a href="pages/bid/bid.html">招投标</a></li>\
                        <li class="xmgl"><a href="pages/Projectcenter/quality.html">项目管理</a></li>\
                        <li class="fws" ><a href="pages/facilitator/decoration.html">服务商</a></li>\
                        <li class="gywm"><a href="pages/Aboutus/Introductionofplatform.html">关于我们</a></li>\
                    </ul>\
                </div>\
                <div class="navbar-collapse" id="person">\
                    <ul class="nav navbar-nav navbar-right">\
                        <li @click="modal_tip()"><img src="common/img/icon/tjn.png" width="50" height="50">\
                            <br/>\
                            <br/>\
                            <div>登录/注册</div>\
                        </li>\
                        <li><a href="#">我的关注</a></li>\
                        <li><a href="#">我的收藏</a></li>\
                        <li><a href="#">我的消息</a></li>\
                        <li><a href="#">我的创作</a></li>\
                        <li ><a href="#">资料与信息</a></li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
            <div class="swiper-container header-swiper-container pswiper">\
                <div class="swiper-wrapper ">\
                    <div class="swiper-slide"><img src="common/img/images/banner1.jpg" height="100%" ></div>\
                    <div class="swiper-slide"><img src="common/img/images/banner1.jpg" height="100%" ></div>\
                    <div class="swiper-slide" ><img src="common/img/images/banner1.jpg" height="100%" ></div>\
                </div>\
                <div class="swiper-pagination header-pagination"></div>\
            </div>\
            <div class="swiper-container header-swiper-container mswiper" style="display:none">\
                <div class="swiper-wrapper ">\
                    <div class="swiper-slide"><img src="common/img/images/mbanner1.png" height="240px" ></div>\
                    <div class="swiper-slide"><img src="common/img/images/mbanner1.png" height="240px" ></div>\
                    <div class="swiper-slide"><img src="common/img/images/mbanner1.png" height="240px" ></div>\
                </div>\
                <div class="swiper-pagination header-pagination pswiper"></div>\
            </div>\
            <div class="addrbox clearfix mswiper mswiper1" style="display: none">\
                <div class="pull-left " style="margin-right: 10px;margin-top:4px">\
                    <img class="myimgp" src="common/img/icon/place.png"><span>成都</span>\
                </div>\
                <div class="pull-left sear" style="position:relative">\
                    <input type="search" placeholder="请输入关键字查找"/>\
                    <img src="common/img/icon/search.png">\
                </div>\
            </div>\
        </div>\
    </div>',
    data: function () {
        return {
            isShow:false,
            weixin:false,
            person_cunt:0
        }
    },
    methods: {
        login:function(){
            this.modal_close()
        },
        modal_tip:function() {
            this.isShow=true;
        },
        modal_close:function(){
            this.isShow=false;
        },
        wei_img:function(item){
            if(item==1){
                this.weixin=true;
            }else {
                this.weixin=false;
            }
        },
        person:function(){
            if(this.person_cunt==0){
                $('#person').slideUp(200);
                this.person_cunt=1
            }else {
                $('#person').slideDown(200);
                this.person_cunt=0
            }
        },
        editaddr:function(){
            $(".myaddr").show();
        },
        editok(){
            var addrstr=$("#pro").val()+$("#city").val();
            addrstr=addrstr.replace("省"," ");
            addrstr=addrstr.replace("市","");
            $('#addrname').html(addrstr);
            $(".myaddr").hide();
        },
        editno(){
            $(".myaddr").hide();
        },
    },
    mounted:function(){
        $('.siteNav').css('display', 'block');
        var mySwiper = new Swiper('.header-swiper-container',{
            pagination : '.header-pagination',
            loop : true,
            speed:300,
            keyboardControl : true,
          /*  mousewheelControl : true,//鼠标控制*/
            freeMode : false,//切换效果
              //autoplay : 5000,
        });
    }
});
//底部
Vue.component('footer-model', {
    template: '<div class="footer">\
        <div class="container">\
        <div class="footerBox">\
        <span><a href="#">加速器首页</a></span>|<span><a href="pages/introduce/introduce.html">产品介绍</a></span>|<span><a href="pages/brandManage/business.html">品牌中心</a></span>|\
        <span><a href="pages/designCenter/decoration.html">设计中心</a></span>|<span><a href="pages/bid/bid.html">招投标</a></span>|<span><a href="pages/Projectcenter/quality.html">项目管理</a></span>|\
        <span><a href="pages/facilitator/decoration.html">服务商</a></span>|<span><a href="pages/Aboutus/Introductionofplatform.html">关于我们</a></span>|<span><a href="#">后台登陆</a></span>|\
        <span><a href="#">服务商登陆</a></span>\
        <div class="Copy">Copyright © 2016 - 2017 加速器.com 版权所有 互联网出版许可证编号新出网证(加速器)字155号 加ICP证171239号</div>\
        </div>\
        </div>\
    </div>'
});

