gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".pinned-section",
    start: "top top",
    end: "+=500", 
    pin: true,
    scrub: true,
    markers: true,
  }
})
  .from(".pinned-section .title", { y: 100, opacity: 0, duration: 1 })
  .from(".pinned-section .description", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
  .to(".pinned-section .scene", { scale: 1, opacity: 1, duration: 1 }, "-=0.5");

gsap.to(".parallax-image", {
  yPercent: -30,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from(".final-section h1, .final-section p", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ".final-section",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
});
