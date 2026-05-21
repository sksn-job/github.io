import { initSwiper } from "./swiper.js";
import { initHero } from "./hero.js";
import { initAnimation } from "./animation.js";
import { initSidePanel } from "./sidePanel.js";

document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initSwiper();
  initAnimation();
  initSidePanel();
});
