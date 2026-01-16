const tl = gsap.timeline();
tl.from("h1", {
  y: -20,
  duration:1,
  delay:1,
  opacity:0,
});
tl.from("h3", {
  y: -20,
  duration:1,
  opacity:0,
  stagger:0.5,
});
tl.from("h2", {
  y: -20,
  duration:1,
  opacity:0,
  scale:0.2
});

