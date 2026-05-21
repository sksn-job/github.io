// export function initSidePanel() {
//   const sections = ["about", "works", "skills"];
//   const titles = document.querySelectorAll(".side-title");
//   const sideNav = document.querySelector(".pc-side-title");

//   sideNav.style.opacity = "0";

//   let lastScrollY = window.scrollY;
//   let scrollingUp = false;

//   // スクロール方向を一箇所で管理
//   window.addEventListener("scroll", () => {
//     scrollingUp = window.scrollY < lastScrollY;
//     lastScrollY = window.scrollY;
//   });

//   const hero = document.querySelector(".hero");
//   const heroObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!scrollingUp) return;
//         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//           sideNav.style.opacity = "0";
//           titles.forEach((t) => t.classList.remove("is-active"));
//         }
//       });
//     },
//     { threshold: [0.1, 0.3, 0.5] },
//   );
//   if (hero) heroObserver.observe(hero);

//   const downObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (scrollingUp) return;
//         const index = sections.indexOf(entry.target.id);
//         if (index === -1 || !entry.isIntersecting) return;
//         sideNav.style.opacity = "1";
//         titles.forEach((t) => t.classList.remove("is-active"));
//         titles[index].classList.add("is-active");
//       });
//     },
//     { threshold: 0.5 },
//   );

//   const upObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!scrollingUp) return;
//         const index = sections.indexOf(entry.target.id);
//         if (index === -1 || !entry.isIntersecting) return;
//         sideNav.style.opacity = "1";
//         titles.forEach((t) => t.classList.remove("is-active"));
//         titles[index].classList.add("is-active");
//       });
//     },
//     { threshold: 0 },
//   );

//   sections.forEach((id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     downObserver.observe(el);
//     upObserver.observe(el);
//   });
// }
export function initSidePanel() {
  const sections = ["about", "works", "skills"];
  const titles = document.querySelectorAll(".side-title");
  const sideNav = document.querySelector(".pc-side-title");

  sideNav.style.opacity = "0";

  let lastScrollY = window.scrollY;
  let scrollingUp = false;

  window.addEventListener("scroll", () => {
    scrollingUp = window.scrollY < lastScrollY;
    lastScrollY = window.scrollY;
  });

  const hero = document.querySelector(".hero");
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!scrollingUp) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          sideNav.style.opacity = "0";
          titles.forEach((t) => t.classList.remove("is-active"));
        }
      });
    },
    { threshold: [0.1, 0.3, 0.5] },
  );
  if (hero) heroObserver.observe(hero);

  const downObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (scrollingUp) return;
        const index = sections.indexOf(entry.target.id);
        if (index === -1 || !entry.isIntersecting) return;
        sideNav.style.opacity = "1";
        titles.forEach((t) => t.classList.remove("is-active"));
        titles[index].classList.add("is-active");
      });
    },
    { threshold: 0.5 },
  );

  const upObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!scrollingUp) return;
        const index = sections.indexOf(entry.target.id);
        if (index === -1) return;

        if (!entry.isIntersecting) {
          const prevIndex = index - 1;
          if (prevIndex < 0) return;
          sideNav.style.opacity = "1";
          titles.forEach((t) => t.classList.remove("is-active"));
          titles[prevIndex].classList.add("is-active");
        }
      });
    },
    { threshold: 0 },
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    downObserver.observe(el);
    upObserver.observe(el);
  });
}
