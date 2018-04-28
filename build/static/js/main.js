
$(document).ready(function() {
    $('.slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: ''
    });

//Аккордон================================= 
    $('.answers-acco').each(function() {
        $(this).find('.answers-acco__link').click(function() {
            $(this).siblings('.answers-acco__more').toggleClass('active').slideToggle(400);
            $(this).children('.answers-acco__close').toggleClass('active-close');
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

//section-menu================================= 
$('.nav__list').each(function(){
    $(this).find('.nav__link').click(function(){
        $(this).siblings('.dropdown').toggleClass('dropdown__active').slideToggle(400);
    });
});
});//Конец ready