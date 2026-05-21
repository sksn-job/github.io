import { gsap } from "https://esm.run/gsap";

export const initHero = () => {
  const tl = gsap.timeline();

  tl.from(
    [".hero-left-bg", ".hero-right-bg"],
    {
      duration: 2,
      opacity: 0,
      filter: "blur(15px)",
      ease: "power2.out",
    },
    "<",
  ) // headerと同時
    .from(
      ".catch",
      {
        duration: 1.8,
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        scale: 0.95,
        ease: "power2.out",
      },
      "-=1.5",
    ); // 少し重ねる
};
