var app = new Vue({
    el: '#app',
    data: {
<<<<<<< HEAD
=======

>>>>>>> 3858cb0580004121933fb94ad40cd2db1fc261e5
        videodata:[
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            },
            {
                src:'../../index/video/240.mp4',
                title:'什么是直播？',
            }
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
    },
    created: function () {
<<<<<<< HEAD
       
=======
>>>>>>> 3858cb0580004121933fb94ad40cd2db1fc261e5

        
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

        //视频
        clickfun(ev,a){
            
            $(ev.target).addClass('myacbgd').parent().siblings().find('a').removeClass('myacbgd');
            $('.'+a+'').parent().fadeIn();
            $('.'+a+'').parent().siblings().hide();
            console.log($('.'+a+''));
        },
        playvideo(ev,index){

            var videoobj = document.getElementsByClassName("videoobj")[index];
            console.log(videoobj);
            if(videoobj.paused){
                videoobj.play();
                //alert()
            }else{
                videoobj.pause();
            }
        },
        //更多
        zkmore(ev){
            $(ev.target).parent().siblings('.mcontbox').find('.myno').slideToggle();
        },
        zhibomore(ev){
            if(!$(ev.target).hasClass('clicked')){
                $(ev.target).addClass("clicked");
                $('.mozhibo').css({'height':'auto'});
            }else{
                $(ev.target).removeClass("clicked");
                $('.mozhibo').css({'height':'107px'});
            }
        },
        //tab
        myultab(ev,a){
            $(ev.target).addClass('maccss').siblings('a').removeClass('maccss');
            $("."+a+"").fadeIn();
            $("."+a+"").siblings('.multab').hide();
        },

    },
})