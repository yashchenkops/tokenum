import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper(el) {
  return new Swiper(el, {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    simulateTouch: false,
    speed: 800,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: el.parentElement.querySelector('.swiper-button-next'),
      prevEl: el.parentElement.querySelector('.swiper-button-prev'),
      addIcons: false,
    },
  });
}