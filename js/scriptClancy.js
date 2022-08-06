let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
mask.classList.add('hide');
setTimeout(() => {
  mask.remove();
}, 600);
})



$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        slidesToShow:3,
        speed: 400,
        adaptiveHeight:false,
        autoplay:true,
        autoplaySpeed: 700,
        centerMode:false

    });
});    
