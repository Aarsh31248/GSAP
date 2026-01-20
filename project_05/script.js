function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    delay: 0.5,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    y: 200,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.5,
  });
  tl.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=1.5",
  );
}
page1Animation();

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".section1bottom", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.5,
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "top",
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "top",
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "bottom",
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "bottom",
  );
}
page2Animation();
