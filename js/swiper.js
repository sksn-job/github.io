import Swiper from "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.mjs";

export const initSwiper = () => {
  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};