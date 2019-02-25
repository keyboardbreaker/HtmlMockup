var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    resizeReInit: true,
});
$(window).resize(function(){
    var ww = $(window).width();
    if (ww>1400) swiper.params.slidesPerView = 3;
    if (ww<=1400) swiper.params.slidesPerView = 1;
    swiper.update();
});
$(window).trigger('resize');