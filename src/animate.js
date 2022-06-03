import gsap, { Power4 } from "gsap";

export const animateCarousel = (
  carousel,
  slides,
  activeCard,
  card,
  cardTitle,
  cardAction
) => {
  gsap.to(carousel, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    delay: 0.65,
    ease: Power4,
  });

  slides.forEach((el) => {
    gsap.to(el, {
      scale: 1,
      duration: 0.65,
      ease: Power4,
    });
    gsap.to(el.querySelector(".app__carousel-card-title"), {
      yPercent: 0,
      duration: 0.325,
      ease: Power4,
    });
    gsap.to(el.querySelector(".app__carousel-card-action"), {
      autoAlpha: 0,
      yPercent: -85,
      duration: 0.325,
      ease: Power4,
    });
  });

  if (card)
    carousel = gsap
      .timeline()
      .to(card, {
        yPercent: -8,
        scale: 0.95,
        duration: 0.35,
        ease: Power4,
      })
      .to(card, {
        yPercent: 0,
        duration: 0.3,
        ease: Power4,
      })
      .to(
        activeCard,
        {
          scale: 1.5,
          duration: 1.1,
          ease: Power4,
        },
        "-=0.5"
      )
      .to(
        cardTitle,
        {
          yPercent: -50,
          duration: 0.45,
          ease: Power4,
        },
        "-=1"
      )
      .to(
        cardAction,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.65,
          ease: Power4,
        },
        "-=1.15"
      );
};
