const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  duration: 0.5,
});
tl.from("#full h4", {
  x: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
});
tl.from("#full i", {
  opacity: 0,
  x: 20,
});

tl.pause();

menu.addEventListener("click", () => {
    tl.play()
})
cross.addEventListener("click", () => {
    tl.reverse()
})