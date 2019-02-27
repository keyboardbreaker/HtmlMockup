var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    resizeReInit: true,
});

// 320 to 1100
$(window).resize(function(){
    var ww = $(window).width();
    if (ww>1100) swiper.params.slidesPerView = 3;
    if (ww>700 && ww <1100) swiper.params.slidesPerView = 2;
    if (ww<=768) swiper.params.slidesPerView = 1;
    swiper.update();
});
$(window).trigger('resize');