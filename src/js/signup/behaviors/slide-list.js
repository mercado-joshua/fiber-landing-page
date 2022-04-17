const swiperSlideList = () => {
    const swiper = new Swiper('[data-js-slide-list]', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
    });
};

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') swiperSlideList();
});