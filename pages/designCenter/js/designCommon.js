var app = new Vue({
    el: '#app',
    data: {
        
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
    },
})