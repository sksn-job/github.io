import { gsap } from "https://esm.run/gsap";
import { ScrollTrigger } from "https://esm.run/gsap/ScrollTrigger";
import { SplitText } from "https://esm.run/gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const initAnimation = () => {
  // セクションタイトル・名前・段落　滲みフェードイン
  const titles = document.querySelectorAll(".sec-title, .about-name");

  titles.forEach((title) => {
    const split = new SplitText(title, { type: "chars" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
      },
      duration: 1.5,
      opacity: 0,
      filter: "blur(8px)",
      stagger: 0.1, // 1文字ずつ少しずらして
      ease: "power2.out",
    });
  });

  //   プロフィール画像　滲みフェードイン
  gsap.from(".about-img", {
    scrollTrigger: {
      trigger: ".about-img",
      start: "top 80%",
    },
    duration: 1.8,
    opacity: 0,
    filter: "blur(15px)",
    ease: "power2.out",
  });

  //   テキスト・スキルリスト　下から滲みフェードイン
  document.querySelectorAll(".about-text, .skills-list").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      duration: 1.8,
      opacity: 0,
      filter: "blur(8px)",
      y: 20,
      ease: "power2.out",
    });
  });

  // Worksカード　スケール
  gsap.from(".works-card", {
    scrollTrigger: {
      trigger: ".works-card",
      start: "top 80%",
    },
    duration: 1.5,
    opacity: 0,
    scale: 0.95,
    ease: "power2.out",
  });
};
