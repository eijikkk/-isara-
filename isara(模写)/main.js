$(document).ready(function(){

    $(function(){
        $('.question-q').on('click',function(){
            $(this).next().slideToggle('fast');
            $(this).children('i').toggleClass('toggle');
        });
    });

    $(function(){
        $('.pagetop').click(function () {
        $("html,body").animate({scrollTop:0},1000);
        });
    });

    $(function(){
        $('.to-form').on('click',function(){
            $("html,body").animate({scrollTop:$('.form').offset().top},1000);
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').fadeIn('slow');
        } else {
            $('.top-btn').fadeOut();
        }
   });
    
    $(function(){
        $('.flow-img').on('click',function(){
            var windowWidth = window.innerWidth;
            if(windowWidth<=1023){
                if($(this).next().css('display')!=='none'){
                    $(this).next().slideToggle('fast');
                    $(this).children('i').toggleClass('rotate');
                }else{
                    $('.flow-text').slideUp('fast');
                    $(this).next().slideToggle('fast');
                    $('.flow-img').children('i').removeClass('rotate');
                    $(this).children('i').addClass('rotate');
                }
            }
        });
    });
});