/**
 * Created by Administrator on 2018/4/18.
 */
Vue.component('h5-model', {
    template:'<div class="h5-model">\
            <div class="h5-login" @click="blank">\
                <img src="../../common/img/icon/aaaa.png" width="100%">\
            </div>\
            <ul>\
                <li>\
                    <img src="../../common/img/icon/icon1.png">\
                    <div>在线咨询</div>\
                </li>\
                <li>\
                    <img src="../../common/img/icon/icon2.png">\
                    <div>电话咨询</div>\
                </li>\
                <li>\
                    <img src="../../common/img/icon/icon5.png" class="boos">\
                    <div>招标发布</div>\
                </li>\
                <li>\
                    <img src="../../common/img/icon/icon3.png">\
                    <div>我的收藏</div>\
                </li>\
                <li>\
                    <img src="../../common/img/icon/icon4.png">\
                    <div>我的消息</div>\
                </li>\
            </ul>\
    </div>',
    data: function () {
        return {

        }
    },
    methods: {
        blank:function(){
        window.location.href='login.html'
       }
    },
    mounted:function(){

    }
})
Vue.component('h5-nav', {
    template:'<div class="h5_nav">\
            <div class="swiper-container h5_head">\
                <div class="swiper-wrapper">\
                    <div class="swiper-slide">\
                       <div><a href="bid.html">招标公告</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="winBid.html">中标公告</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="notice.html">招标预告</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="hot.html">推荐项目</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="construction.html">拟在建项目</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="vipProject.html">VIP独家项目</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="supplyChain.html">供应链招标</a></div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div><a href="help.html">帮助中心</a></div>\
                    </div>\
                </div>\
            </div>\
        </div>',
    data: function () {
        return {

        }
    },
    methods: {

    },
    mounted:function(){
        var h5_head = new Swiper('.h5_head', {
            slidesPerView: 4,
            loop : false,
            spaceBetween: 0,
        });
    }
});
//pc
Vue.component('bid-nav', {
    template:'<div class="bid-nav">\
        <ul class="container">\
            <li><a href="bid.html">招标公告</a></li>\
            <li><a href="winBid.html">中标公告</a></li>\
            <li><a href="notice.html">招标预告</a></li>\
            <li><a href="hot.html">推荐项目</a></li>\
            <li><a href="construction.html">拟在建项目</a></li>\
            <li><a href="vipProject.html">VIP独家项目</a></li>\
            <li><a href="supplyChain.html">供应链招标</a></li>\
        </ul>\
    </div>',
    data: function () {
        return {

        }
    },
    methods: {

    },
    mounted:function(){

    }
});
Vue.component('web-config', {
    template:'<div class="web-config leftlist"><div class="rightmain" style="background:#fff">\
            <button v-if="login_State==1" type="button" class="btn btn-primary" @click="loginBox(2)">登录</button>\
            <button v-if="login_State==1" type="button" class="btn btn-primary">免费注册</button>\
            <div class="tenderbox">\
                <div v-if="login_State==1">\
                    <div class="tender" :class="{active:1==tenderShow}" @click="toggle_tender(1)">我要招标</div>\
                    <div class="tender" :class="{active:2==tenderShow}" @click="toggle_tender(2)">我要投标</div>\
                    <div v-if="1==tenderShow">\
                        <ul>\
                            <li>\
                                <p></p>\
                                <div>发布招标</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>诚信认证</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>招标管理</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>VIP升级</div>\
                            </li>\
                        </ul>\
                        <button type="button" class="btn btn-info">加入招标</button>\
                    </div>\
                    <div v-if="2==tenderShow">\
                        <ul>\
                            <li>\
                                <p></p>\
                                <div>在线投标</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>诚信认证</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>投标管理</div>\
                            </li>\
                            <li>\
                                <p></p>\
                                <div>VIP升级</div>\
                            </li>\
                        </ul>\
                        <button type="button" class="btn btn-info">加入诚信投</button>\
                    </div>\
                </div>\
                <div v-if="login_State==2" class="tr_2">\
                    <div class="login_in">\
                        <span class="">欢迎您：</span><span>11024588</span>\
                        <img src="../../common/img/icon/info.png">\
                    </div>\
                    <ul class="state_box">\
                        <li><span>会员类型：</span><span>供应商</span></li>\
                        <li><span>会员级别：</span><span><span>vip</span>会员</span></li>\
                        <li><span>认证状态：</span><span>已认证</span></li>\
                        <li>\
                            <img src="../../common/img/icon/chan.png"><span>14次</span>\
                            <img src="../../common/img/icon/zhong.png"><span>10次</span>\
                        </li>\
                        <li>\
                            <button type="button" class="btn btn-warning" @click="pub()">我的个人应用</button>\
                        </li>\
                        <li @click="loginBox(1)">退出登陆</li>\
                    </ul>\
                </div>\
            </div>\
            <div class="Hotline">\
                <div class="hotline_1">\
                    <img src="../../common/img/icon/iphone.png"/>\
                    <div>服务热线</div>\
                </div>\
                <div class="hotline_2">400-1234-567</div>\
            </div>\
            <div class="xxx"></div>\
            <div class="fix fixdnone">\
                <p>帮助中心</p>\
                <div>更多></div>\
            </div>\
            <div class="fixbiox fixdnone">\
                <ul>\
                    <li class="sl"><span>*</span>招投标指南</li>\
                    <li class="sl"><span>*</span>招投标流程指导</li>\
                    <li class="sl"><span>*</span>提前报价价格会不会泄露？</li>\
                    <li class="sl"><span>*</span>如何开通会员服务？</li>\
                    <li class="sl"><span>*</span>VIP会员的优势？</li>\
                    <li class="sl"><span>*</span>如何升级VIP？</li>\
                </ul>\
            </div>\
            <div class="xxx fixdnone"></div>\
            <div class="fix fixdnone">\
                <p> <img src="../../common/img/icon/xiazai.png">招标资料下载</p>\
                <div>更多></div>\
            </div>\
            <div class="fixbiox fixdnone">\
                <ul>\
                    <li class="sl"><span>*</span>政府招投标法律法规（201...</li>\
                    <li class="sl"><span>*</span>工程建设项目施工招投标...</li>\
                    <li class="sl"><span>*</span>工程建设项目勘察设计招...</li>\
                    <li class="sl"><span>*</span>建设施工合同（示范文本）</li>\
                    <li class="sl"><span>*</span>大型设备采购招标文件范本</li>\
                    <li class="sl"><span>*</span>国家现行100余部法律全文</li>\
                </ul>\
            </div>\
        </div></div>',
    data: function () {
        return {
            tenderShow:1,
            login_State:1,
        }
    },
    methods: {
        toggle_tender:function(ct){
            this.tenderShow=ct
        },
        loginBox:function(c){
            sessionStorage.setItem("login_State",c);
            this.login_State=c;
        },
        pub(){
        window.location.href='publish.html'
       }
    },
    mounted:function(){
        if(sessionStorage.getItem("login_State")){
            this.login_State=sessionStorage.getItem("login_State");
        }
    }
})
Vue.component('my-panel', {
    template:'<div class="myPanel">\
                <div class="panel_1">\
                    <div class="pictureFrame"><img src="../../common/img/icon/default.png" width="100%"></div>\
                    <div class="msg">\
                        <p>王宇<i>></i></p>\
                        <p>采购商<i>VIP</i></p>\
                    </div>\
                    <div class="name">四川欣新建材</div>\
                </div>\
                <div class="panel_2">\
                    <div class="head">我的应用</div>\
                    <div class="imgbox"><img src="../../common/img/icon/inner.png"/></div>\
                    <div class="nav_box nav-11">\
                        <ul>\
                            <li><a href="myNews.html"><img src="../../common/img/icon/smile.png"/><i>我的消息</i></a></li>\
                            <li><a href="footprint.html"><img src="../../common/img/icon/smile.png"/><i>我的足迹</i></a></li>\
                            <li><a href="favorite.html"><img src="../../common/img/icon/smile.png"/><i>我的收藏</i></a></li>\
                            <li><a href="publish.html"><img src="../../common/img/icon/smile.png"/><i>发布招标</i></a></li>\
                            <li><a href="management.html"><img src="../../common/img/icon/smile.png"/><i>项目管理</i></a></li>\
                            <li><a href="register.html"><img src="../../common/img/icon/smile.png"/><i>注册账号</i></a></li>\
                            <li><a href="upgrade.html"><img src="../../common/img/icon/smile.png"/><i>账号升级</i></a></li>\
                            <li><a href="attestation.html"><img src="../../common/img/icon/smile.png"/><i>诚信认证</i></a></li>\
                            <li><a href="mail.html"><img src="../../common/img/icon/smile.png"/><i>邮件推送</i></a></li>\
                        </ul>\
                    </div>\
                    <div class="head">帮助中心</div>\
                    <div class="imgbox"><img src="../../common/img/icon/inner.png"/></div>\
                    <div class="nav_box nav-foo">\
                        <ul>\
                            <li><a href="guide.html"><i>招投标指南</i></a></li>\
                            <li><a href="help.html"><i>服务协议</i></a></li>\
                        </ul>\
                    </div>\
                </div>\
            </div>',
})

