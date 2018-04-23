var app = new Vue({
    el: '#app',
    data: {
        more:1,
<<<<<<< HEAD
        service:[
            {icon_img:'../../common/img/images/gxh.png',txt:'设计',content:'以业主为核心的有效组织，对平台参与方提供全方位实现个性化需求'},
            {icon_img:'../../common/img/images/tmh.png',txt:'施工',content:'以业主为核心的有效组织，对平台参与方提供全方位实现个性化需求'},
            {icon_img:'../../common/img/images/bzh.png',txt:'监理',content:'以业主为核心的有效组织，对平台参与方提供全方位实现个性化需求'},
            {icon_img:'../../common/img/images/zhh.png',txt:'审计',content:'以业主为核心的有效组织，对平台参与方提供全方位实现个性化需求'},
            {icon_img:'../../common/img/images/pph.png',txt:'项目执行',content:'以业主为核心的有效组织，对平台参与方提供全方位实现个性化需求'}
        ],
        luntandata:[
            {
                src:'../../common/img/images/img1.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img2.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img1.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img2.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img1.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img2.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img1.png',
                title:'什么是论坛？',
            },
            {
                src:'../../common/img/images/img2.png',
                title:'什么是论坛？',
            },
        ],
=======
>>>>>>> 53148e0a073a5100a458b955d599241b04aae66e
    },
    created: function () {
        
    },
    methods: {
        //nav高亮
		searchfun(ev){
			$(ev.target).addClass('hoverhight').siblings().removeClass('hoverhight');
            window.location.href='AskQuestions_b.html';
		},
        //nav跳转
        searchcli(ev,a){
            $(ev.target).addClass('myhight').siblings().removeClass('myhight');
            //alert(a);
            window.location.href=''+a+'.html';
        },
        //查看更多
<<<<<<< HEAD
        zkmorefun(ev){
            if(this.more==1){
                this.more=0;
                $(ev.target).parent().siblings('.zkmorebox').slideDown();
            }else{
                this.more=1;
                $(ev.target).parent().siblings('.zkmorebox').slideUp();
=======
        viewmore(ev){
            if(this.more==1){
                this.more=0;
                $(ev.target).parents('.mbox').find('.mnone').slideDown();
            }else{
                this.more=1;
                $(ev.target).parents('.mbox').find('.mnone').slideUp();
>>>>>>> 53148e0a073a5100a458b955d599241b04aae66e
            }
        },
        //查看详情
        viewdetail(ev){
            window.location.href="interview_detail.html";
        },
        zkfun(ev){
            //alert(1);
            jq('.zkmorderbox').slideToggle();
        },
        //关注
        guanzhu(ev){
            $(ev.target).addClass('hiactive').siblings().removeClass('hiactive');
        },
        //预约咨询
        yuyue(ev){
            $(ev.target).addClass('hiactive').siblings().removeClass('hiactive');
        },
        //进入空间
        kongjian(){
            window.location.href="header.html";
        },
        //提问
        AskQuestions_a(){
            window.location.href="AskQuestions_a.html";
        },
        //提问
        AskQuestions_b(){
            window.location.href="AskQuestions_b.html";
        },
        //提问
        AskQuestions(){
            window.location.href="AskQuestions.html";
        },
<<<<<<< HEAD
        clickfun(ev,a){

            $(ev.target).addClass('myacbgd').parent().siblings().find('a').removeClass('myacbgd');
            $('.'+a+'').parent().fadeIn();
            $('.'+a+'').parent().siblings().hide();
            console.log($('.'+a+''));
        },
=======
>>>>>>> 53148e0a073a5100a458b955d599241b04aae66e
    },
})