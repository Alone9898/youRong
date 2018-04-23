//头部
Vue.component('sitenav', {
    template:'<div class="mycontainer">\
    <div class="container siteNav">\
        <div class="row" >\
            <div class="col-xs-2 col-lg-1 place">\
                <div class="dropdown">\
                    <button type="button" class="btn dropdown-toggle " style="background: none" id="dropdownMenu1"\
                            data-toggle="dropdown">\
                        <img src="../../common/img/icon/place.png"/>\
                        <span>四川·成都</span>\
                        <span class="caret"></span>\
                    </button>\
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\
                        <li role="presentation">\
                            <a role="menuitem" tabindex="-1" href="#">四川·南充</a>\
                        </li>\
                        <li role="presentation">\
                            <a role="menuitem" tabindex="-1" href="#">四川·泸州</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
            <div class="col-xs-7 col-lg-7 siteNav_welcome">欢迎来到装修加速平台，请 <a href="#" @click="modal_tip()">登录</a> | <a href="#">注册</a></div>\
            <div class="col-xs-3 col-lg-4 siteNav_welcome siteNav_right">\
              <span class="weixin" @mouseover="wei_img(1)" @mouseout="wei_img(2)">微信公众号</span>\
              <div class="weixin_img" v-show="weixin"><img src="../../common/img/icon/weixin.jpg" width="120" height="120"></div>\
            </div>\
        </div>\
    </div>\
    <div class="modal_tip"  v-show="isShow" style="display: none">\
        <div class="modal_box">\
            <div class="modal_close">\
                <img @click="modal_close" src="../../common/img/icon/close.png">\
            </div>\
            <div class="modal_title">账号登录</div>\
            <input type="text" class="form-control user" maxlength="11" placeholder="用户名/手机号/邮箱">\
            <input type="text" class="form-control passWord" placeholder="密码" >\
            <div class="state">\
                <input type="checkbox" class="checkbox"><span>下次自动登录</span>\
                <div>忘记密码？</div>\
            </div>\
            <div class="login">立即登录</div>\
            <div class="register">还没有账号？<span>免费注册</span></div>\
        </div>\
    </div>\
    <div class="l_header">\
        <nav class="navbar navbar-default" role="navigation">\
            <div class="container clearfix">\
                <div class="navbar-header">\
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">\
                        <span class="sr-only">切换导航</span>\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                    </button>\
                    <a href="../../index.html" class="logo">\
                        <img src="../../common/img/icon/logo.png">\
                    </a>\
                    <div class="person">\
                        <img src="../../common/img/icon/ok.png" @click="person()">\
                    </div>\
                </div>\
                <div class="collapse navbar-collapse" id="navbar-menu">\
                    <ul class="nav navbar-nav navbar-left">\
                        <li><a href="../../index.html">首页</a></li>\
                        <li><a href="#">产品介绍</a></li>\
                        <li><a href="../../pages/brandManage/business.html">品牌中心</a></li>\
                        <li><a href="../../pages/designCenter/decoration.html">设计中心</a></li>\
                        <li><a href="../../pages/bid/bid.html">招投标</a></li>\
                        <li ><a href="../../pages/Projectcenter/quality.html">项目管理</a></li>\
                        <li ><a href="../../pages/facilitator/decoration.html">服务商</a></li>\
                        <li><a href="../../pages/Aboutus/Introductionofplatform.html">关于我们</a></li>\
                    </ul>\
                </div>\
                <div class="navbar-collapse" id="person">\
                    <ul class="nav navbar-nav navbar-right">\
                        <li @click="modal_tip()"><img src="../../common/img/icon/tjn.png" width="50" height="50">\
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
                    <div class="swiper-slide"><img src="../../common/img/images/banner1.jpg" height="100%" ></div>\
                    <div class="swiper-slide"><img src="../../common/img/images/banner1.jpg" height="100%" ></div>\
                    <div class="swiper-slide" ><img src="../../common/img/images/banner1.jpg" height="100%" ></div>\
                </div>\
                <div class="swiper-pagination header-pagination"></div>\
            </div>\
            <div class="swiper-container header-swiper-container mswiper" style="display:none">\
                <div class="swiper-wrapper ">\
                    <div class="swiper-slide"><img src="../../common/img/images/mbanner1.png" height="240px" ></div>\
                    <div class="swiper-slide"><img src="../../common/img/images/mbanner1.png" height="240px" ></div>\
                    <div class="swiper-slide"><img src="../../common/img/images/mbanner1.png" height="240px" ></div>\
                </div>\
                <div class="swiper-pagination header-pagination pswiper"></div>\
            </div>\
            <div class="addrbox clearfix mswiper mswiper1" style="display: none">\
                <div class="pull-left " style="margin-right: 10px;margin-top:4px">\
                    <img class="myimgp" src="../../common/img/icon/place.png"><span>成都</span>\
                </div>\
                <div class="pull-left sear" style="position:relative">\
                    <input type="search" placeholder="请输入关键字查找"/>\
                    <img src="../../common/img/icon/search.png">\
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
        <span><a href="#">加速器首页</a></span>|<span><a href="#">产品介绍</a></span>|<span><a href="../../pages/brandManage/business.html">品牌中心</a></span>|\
        <span><a href="../../pages/designCenter/decoration.html">设计中心</a></span>|<span><a href="../../pages/bid/bid.html">招投标</a></span>|<span><a href="../../pages/Projectcenter/quality.html">项目管理</a></span>|\
        <span><a href="../../pages/facilitator/decoration.html">服务商</a></span>|<span><a href="../../pages/Aboutus/Introductionofplatform.html">关于我们</a></span>|<span><a href="#">后台登陆</a></span>|\
        <span><a href="#">服务商登陆</a></span>\
        <div class="Copy">Copyright © 2016 - 2017 加速器.com 版权所有 互联网出版许可证编号新出网证(加速器)字155号 加ICP证171239号</div>\
        </div>\
        </div>\
    </div>'
});
