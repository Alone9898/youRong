/**
 * Created by Administrator on 2018/4/12.
 */
new Vue({
    el: '#example',
    data:{

    },
    methods: {

    },
    mounted:function(){
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
    }
});
