import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const settings = {
    breakpoints: {
        320: {
            autoHeight: false,
            spaceBetween: 30,
            slidesPerColumn: 1,
            slidesPerView: 2,
        },
        992: {
            autoHeight: false,
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
    }
}

// init Swiper:
const swipe = new Swiper('.swiper-container', settings);


