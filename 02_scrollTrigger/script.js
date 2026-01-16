gsap.from("#page1 #box", {
  rotate: 360,
  scale: 0,
  delay: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    markers: true,
    start: "top 20%",
    end: "top -30%",
    scrub: 2,
  },
});
gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin:true,
  },
})