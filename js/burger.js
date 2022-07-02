$(document).ready(function () {
    $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
});    

$('.to__clips').click(function() {
    var target = $('.card-11');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});