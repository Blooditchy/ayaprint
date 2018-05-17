$(document).ready(function() {
    // $('.slider__item-link').fancybox({});

    $('.slider__js').bxSlider({
        pager: false,
        nextText: '',
        nextSelector: '.slider__next',
        prevText: '',
        prevSelector: '.slider__prev',
        slideMargin: 0
    });

//Аккордон==========================================
$('.answers-acco').each(function() {
    $(this).find('.answers-acco__link').click(function() {
        $(this).siblings('.answers-acco__more').toggleClass('active').slideToggle(400);
        $(this).children('.answers-acco__close').toggleClass('active-close');
    });
});

//section-menu=======================================
$('.nav__list').each(function () {
    $(this).find('.nav__link').click(function () {
        $(this).siblings('.dropdown').toggleClass('dropdown__active').slideToggle(300)
    });
})

//Popup-form-callback=================================
$(function(){
    var popupForm = $('#popup');
    var link = $('.questions-call');
    var popupClose = $('.popup__close');

    link.click(function(){
        popupForm.slideToggle(200);
    });

    popupClose.click(function() {
        popupForm.slideToggle(200)
    });

    popupForm.on('click', function(e) {
        if(e.target == this) {
            popupForm.fadeOut('fast');
        }
    });
});

//Popup-menu========================================= 
$(function() {
    var menu = $('.popup-menu');
    var link = $('.humburger')
    var close = $('.popup-menu__close');

    link.click(function (e) {  
        e.preventDefault();
        menu.show(200);
    });

    close.click(function (e) {
        e.preventDefault();
        menu.hide(200);
    });

    menu.on('click', function(e) {
        if(e.target == this) {
            menu.fadeOut('fast');
        }
    });
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.popular-view').offset().top - $(window).height() / 1.2) {
        $('.popular-view .popular-row').each(function(i){
            setTimeout(function(){
                $('.popular-view .popular-row').eq(i).addClass('is-showing')
            }, 150 * (i+1));
        });
    }//end if

    if(wScroll > $('.price').offset().top - $(window).height() / 1.2) {
        $('.price').each(function(i){
            setTimeout(function(){
                $('.price .price-wrapp').eq(i).addClass('is-showing')
            },150 * (i+1));

        })
    }//end if

});


});//Конец ready