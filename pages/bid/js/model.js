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
                       <div class="active">招标公告</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>中标公告</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>招标预告</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>推荐项目</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>拟在建项目</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>VIP独家项目</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>供应链招标</div>\
                    </div>\
                    <div class="swiper-slide">\
                        <div>帮助中心</div>\
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
            spaceBetween: 0
        });
    }
});
//pc
Vue.component('bid-nav', {
    template:'<div class="bid-nav">\
        <ul class="container">\
            <li class="activ">招标公告</li>\
            <li>中标公告</li>\
            <li>招标预告</li>\
            <li>推荐项目</li>\
            <li>拟在建项目</li>\
            <li>VIP独家项目</li>\
            <li>供应链招标</li>\
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
    template:'<div class="web-config">\
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
                            <button type="button" class="btn btn-warning">我的会员中心</button>\
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
            <div class="fix">\
                <p>帮助中心</p>\
                <div>更多></div>\
            </div>\
            <div class="fixbiox">\
                <ul>\
                    <li><span>*</span>招投标指南</li>\
                    <li><span>*</span>招投标流程指导</li>\
                    <li><span>*</span>提前报价价格会不会泄露？</li>\
                    <li><span>*</span>如何开通会员服务？</li>\
                    <li><span>*</span>VIP会员的优势？</li>\
                    <li><span>*</span>如何升级VIP？</li>\
                </ul>\
            </div>\
            <div class="xxx"></div>\
            <div class="fix">\
                <p> <img src="../../common/img/icon/xiazai.png">招标资料下载</p>\
                <div>更多></div>\
            </div>\
            <div class="fixbiox">\
                <ul>\
                    <li><span>*</span>政府招投标法律法规（201...</li>\
                    <li><span>*</span>工程建设项目施工招投标...</li>\
                    <li><span>*</span>工程建设项目勘察设计招...</li>\
                    <li><span>*</span>建设施工合同（示范文本）</li>\
                    <li><span>*</span>大型设备采购招标文件范本</li>\
                    <li><span>*</span>国家现行100余部法律全文</li>\
                </ul>\
            </div>\
        </div>',
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
            localStorage.setItem("login_State",c);
            this.login_State=c;
        }
    },
    mounted:function(){
        if(localStorage.getItem("login_State")){
            this.login_State=localStorage.getItem("login_State");
        }
    }
})

