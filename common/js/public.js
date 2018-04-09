var vm = new Vue({
        el: '#pervip',
        data: {
            isShow:false
        },
        methods: {
            modal_tip:function() {
                this.isShow=true;
            },
            modal_close:function(){
                this.isShow=false;
            },
        },
        mounted:function(){
            $('.siteNav').css('display', 'block');
            var mySwiper = new Swiper('.header-swiper-container',{
                pagination : '.header-pagination',
                loop : true,
                speed:300,
                keyboardControl : true,
                mousewheelControl : true,//鼠标控制
                freeMode : false//切换效果
                /*  autoplay : 5000,*/
            })
        }
    });