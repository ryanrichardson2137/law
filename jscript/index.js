$(function(){
    $('.new-menu').click(function(){
        $('.sliding-navbar').toggleClass('sliding-navbar--open');
        $('.mask').toggleClass('show')
        $('.new').toggleClass('menu-opened');
    });

    $('.mask').click(function(){
        $('.sliding-navbar').toggleClass('sliding-navbar--open');
        $('.mask').removeClass('show');
        $('.new').toggleClass('menu-opened');
    })
});