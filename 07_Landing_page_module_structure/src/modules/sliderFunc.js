'use strict';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';

const swiperFunc = () => {
  const swiper = new Swiper('.swiper', {
    // modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    },
    autoplay: {
      delay: 1500,
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
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
    }
  });
};

export default swiperFunc;
