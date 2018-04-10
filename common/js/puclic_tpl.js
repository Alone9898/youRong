/**
 * Created by Administrator on 2018/4/8.
 */
var siteNav='\
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
                          <span>搜索</span>\
                          <span>微信公众号</span>\
                        </div>\
                    </div>\
                    <div class="modal_tip" v-show="isShow">\
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
                </div>';
var l_header='\
             <div class="l_header">\
                    <nav class="navbar navbar-default" role="navigation">\
                        <div class="container">\
                            <div class="navbar-header">\
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">\
                                    <span class="sr-only">切换导航</span>\
                                    <span class="icon-bar"></span>\
                                    <span class="icon-bar"></span>\
                                    <span class="icon-bar"></span>\
                                    <span class="icon-bar"></span>\
                                </button>\
                                <a href="#" class="navbar-brand nav-title">\
                                </a>\
                            </div>\
                            <div class="collapse navbar-collapse" id="navbar-menu">\
                                <ul class="nav navbar-nav navbar-right">\
                                    <li><a href="#">首页</a></li>\
                                    <li><a href="#">产品介绍</a></li>\
                                    <li><a href="#">品牌中心</a></li>\
                                    <li><a href="#">设计专区</a></li>\
                                    <li><a href="#">招投标</a></li>\
                                    <li ><a href="#">项目管理</a></li>\
                                    <li ><a href="#">服务商</a></li>\
                                    <li><a href="#">关于我们</a></li>\
                                </ul>\
                            </div>\
                        </div>\
                    </nav>\
                    <div class="swiper-container header-swiper-container">\
                            <div class="swiper-wrapper">\
                                <div class="swiper-slide"><img src="../../common/img/icon/banner1.jpg"></div>\
                                <div class="swiper-slide">Slide 2</div>\
                                <div class="swiper-slide" >Slide 3</div>\
                            </div>\
                            <div class="swiper-pagination header-pagination"></div>\
                        </div>\
                </div>';
var  footer='\
                <div class="footer">\
                <div class="container">\
                    <div class="footerBox">\
                        <span><a href="#">加速器首页</a></span>|<span><a href="#">产品介绍</a></span>|<span><a href="#">品牌中心</a></span>|\
                        <span><a href="#">设计专区</a></span>|<span><a href="#">招投标</a></span>|<span><a href="#">项目管理</a></span>|\
                        <span><a href="#">服务商</a></span>|<span><a href="#">关于我们</a></span>|<span><a href="#">后台登陆</a></span>|\
                        <span><a href="#">服务商登陆</a></span>\
                        <div class="Copy">Copyright © 2016 - 2017 加速器.com 版权所有 互联网出版许可证编号新出网证(加速器)字155号 加ICP证171239号</div>\
                    </div>\
                </div>\
                </div>';
 window.onload=function(){
                $(".J_SiteNav").append(siteNav);
                $(".l_header").append(l_header);
                $(".footer").append(footer);
                $('.siteNav').css('display', 'block');
                 var mySwiper = new Swiper('.header-swiper-container',{
                     pagination : '.header-pagination',
                     loop : true,
                     speed:300,
                     keyboardControl : true,
                     mousewheelControl : true,//鼠标控制
                     freeMode : false//切换效果
                     /*  autoplay : 5000,*/
                 });
            };
