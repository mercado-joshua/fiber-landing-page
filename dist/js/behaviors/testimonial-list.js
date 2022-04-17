"use strict";

var swiperTestimonial = function swiperTestimonial() {
  var swiper = new Swiper('[data-js-swiper]', {
    slidesPerView: 'auto',
    spaceBetween: 30
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') swiperTestimonial();
});