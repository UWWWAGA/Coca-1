/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },

      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
      },
    },
    navigation: {
      nextEl: '.about__btn--next',
      prevEl: '.about__btn--prev',
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      577: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.team__btn--next',
      prevEl: '.team__btn--prev',
    },
  });
};