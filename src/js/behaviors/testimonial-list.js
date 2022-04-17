const swiperTestimonial = () => {
    const swiper = new Swiper('[data-js-swiper]', {
        slidesPerView: 'auto',
        spaceBetween: 30
    }); 
};

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') swiperTestimonial();
});