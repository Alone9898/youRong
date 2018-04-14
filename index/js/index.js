


$(function () {
    /*swiper插件*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
    });
    var swiper1 = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
    });
    var swiper2 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });
    var swiper3= new Swiper('.swiper-container3', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true
    });
    var swiper4 = new Swiper('.swiper-container4', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    var swiper6 = new Swiper('.swiper-container6', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

    /*wap直播下拉列表*/
    $('.color_green_l').click(function () {
        $(this).text('收起')
            $('.wap_ht').toggleClass('add_ht')
    });

    function boot(){
        //加载页面时执行一次
        changeMargin();
        //监听浏览器宽度的改变
        window.onresize = function(){
            changeMargin();
        };
        function changeMargin(){
            //获取元素距离屏幕左边的距离
            var divLeft = $('body').offset().left;
            //获取网页可见区域宽度
            var docWidth = document.body.clientWidth;
            if(docWidth <=700){
                $('.pc_bg').removeClass('pc_pd');
            }else {
                var swiper7 = new Swiper('.swiper-container7', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 4,
                    paginationClickable: true,
                    spaceBetween: 0,
                    loop: true
                });
            }
        }
    }
    boot();
});

