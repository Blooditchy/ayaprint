$(document).ready(function() {
    $('.slider__link').fancybox({});
    $('.slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        slideMargin: 0
    });

//Аккордон================================= 
$('.answers-acco').each(function() {
    $(this).find('.answers-acco__link').click(function() {
        $(this).siblings('.answers-acco__more').toggleClass('active').slideToggle(400);
        $(this).children('.answers-acco__close').toggleClass('active-close');
    });
});

//section-menu=================================
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
});

//Popup-menu================================= 
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
});


});//Конец ready