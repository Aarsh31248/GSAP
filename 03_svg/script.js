var path = `M 10 100 Q 505 100 1000 100`;
var finalPath = `M 10 100 Q 505 100 1000 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1000 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", (dets) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(2, 0.2)"
  });
});
