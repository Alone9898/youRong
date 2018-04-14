var app = new Vue({
    el: '#app',
    data: {
        more:1,
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
        viewmore(ev){
            if(this.more==1){
                this.more=0;
                $(ev.target).parents('.mbox').find('.mnone').slideDown();
            }else{
                this.more=1;
                $(ev.target).parents('.mbox').find('.mnone').slideUp();
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

    },
})