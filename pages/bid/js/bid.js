/**
 * Created by Administrator on 2018/4/12.
 */
new Vue({
    el: '#example',
    data:{
        tenderShow:1
    },
    methods: {
        toggle_tender:function(ct){
            this.tenderShow=ct
        }
    },
    mounted:function(){
        var mySwiper = new Swiper('.swiper-container',{
            pagination : '.swiper-pagination',
            loop : true,
            speed:300,
            keyboardControl : true,
            mousewheelControl : true,//鼠标控制
            freeMode : false//切换效果
            /*  autoplay : 5000,*/
        });
    }
});
