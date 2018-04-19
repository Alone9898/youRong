var app = new Vue({
    el: '#app',
    data: {
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
<<<<<<< HEAD
    },
    created: function () {
       
    },
    methods: {
=======
        user_info:[
            {
                name:'Mr.林',
                level:'大师',
                time:'2017-6-05 12:00',
                txt:'贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容类容贴吧类容贴吧类容贴贴吧,类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧,类容贴吧类容贴吧类容贴,吧类容贴吧类容贴吧类容贴,吧类容贴吧类容,贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧,类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴'
            },
            {
                name:'Mr.林',
                level:'大师',
                time:'2017-6-05 12:00',
                txt:'贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容类容贴吧类容贴吧类容贴贴吧,类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧,类容贴吧类容贴吧类容贴,吧类容贴吧类容贴吧类容贴,吧类容贴吧类容,贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧,类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴'
            },
            {
                name:'Mr.林',
                level:'大师',
                time:'2017-6-05 12:00',
                txt:'贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容类容贴吧类容贴吧类容贴贴吧,类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类,容贴吧类容贴吧类容贴吧,类容贴吧类容贴吧类容贴,吧类容贴吧类容贴吧类容贴,吧类容贴吧类容,贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧,类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴吧类容,贴吧类容贴吧类容贴吧类容贴吧类容贴'
            },
        ],

        value:'',
        hide:'',
        hides:false,
        message:[],
    },
    created: function () {
        $(".zxf_pagediv").createPage({
            pageNum: "100",
            current: 1,
        });

        
    },
    methods: {
        show:function(index){
            this.hide=index;
        },
        submit:function(index) {
            console.log(this.user_info)
            if(this.value===''){
                return false
            }else {
                this.message.push({
                    content:this.value
                });
                this.value='',
                this.hides=true,
                this.hide=false
            }
        },
        cancel:function(){
            this.hide=false,
            this.value=''
        },
>>>>>>> 53867945ee5ab30a3bce438605a873c95c5afa80
        //nav高亮
		searchfun(ev){
			$(ev.target).addClass('hoverhight').siblings().removeClass('hoverhight');
            window.location.href='AskQuestions_b.html';
		},
        //nav跳转
        searchcli(ev,a){
            $(ev.target).addClass('myhight').siblings().removeClass('myhight');
            //alert(a);
<<<<<<< HEAD
            //window.location.href=''+a+'.html';
        },
=======
            window.location.href=''+a+'.html';
        },

>>>>>>> 53867945ee5ab30a3bce438605a873c95c5afa80
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
<<<<<<< HEAD
=======

>>>>>>> 53867945ee5ab30a3bce438605a873c95c5afa80
    },
})