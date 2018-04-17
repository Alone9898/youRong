/**
 * Created by Administrator on 2018/4/12.
 */
new Vue({
    el: '#example',
    data:{
        tenderShow:1,
        login_State:1,
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
        this.login_State=localStorage.getItem("login_State");
        var item_2 = new Swiper('.item_2container',{
            pagination : '.item_2pagination',
            loop : true,
            speed:300,
            keyboardControl : true,
            mousewheelControl : true,//鼠标控制
            freeMode : false//切换效果
            /*  autoplay : 5000,*/
        });
        var item_3 = new Swiper('.item_3-container',{
            loop : true,
            speed:300,
            keyboardControl : true,
            /*  mousewheelControl : true,//鼠标控制*/
            freeMode : false,//切换效果
            autoplay : 5000,
        });
        var h5_head = new Swiper('.h5_head', {
            slidesPerView: 4,
            loop : false,
            spaceBetween: 0
        });

    }
});
