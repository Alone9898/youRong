var app = new Vue({
    el: '#app',
    data: {
        
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
            //window.location.href=''+a+'.html';
        },
    },
})