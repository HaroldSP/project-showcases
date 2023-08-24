'use strict';

// core version + navigation, pagination, Autoplay modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const initSwiper = () => {
  // init Swiper:
  const swiper = new Swiper('.top-slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      // delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  return swiper;
};

let SwiperInstance;

export const swiperFunc = () => {
  if (SwiperInstance) {
    SwiperInstance.destroy(true, true);
  }

  SwiperInstance = initSwiper();
};
