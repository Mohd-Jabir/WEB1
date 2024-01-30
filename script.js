var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".gs2",
    start: "0% 100%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to("#pc", {
  top: "110%",
  left: "24%",
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gs3",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
tl2.to("#pc", {
  top: "210%",
  left: "0%",
});
