var app = new Vue({
    el: '#app',
    data: {
        more:1,
    },
    created: function () {
        
    },
    methods: {
		searchfun(ev){
			$(ev.target).addClass('hoverhight').siblings().removeClass('hoverhight');
		},
        searchcli(ev){
            $(ev.target).addClass('myhight').siblings().removeClass('myhight');
        },
        viewmore(ev){
            if(this.more==1){
                this.more=0;
                $(ev.target).parents('.mbox').find('.mnone').slideDown();
            }else{
                this.more=1;
                $(ev.target).parents('.mbox').find('.mnone').slideUp();
            }
            
        },
    },
})