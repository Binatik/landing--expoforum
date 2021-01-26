import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const settings = {
    autoHeight: false,
    slidesPerView: 4,
    slidesPerColumn: 2,
}

// init Swiper:
const swipe = new Swiper('.swiper-container', settings);


