function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splitText = h1Text.split("");
  let halfValue = Math.floor(splitText.length / 2);

  let clutter = "";

  splitText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakTheText();

gsap.from(".a", {
  y: 50,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});

gsap.from(".b", {
  y: 50,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});
