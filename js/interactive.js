const colorScheme = [
  { cytokineDomain: "yellow" },
  { halfLifeExtensionDomain: "blue" },
  { proteaseCleavableLinkers: "red" },
  { inactivationDomain: "cyan" },
];

let cytokine = document.querySelector(".cytokine");

(halfLifeExtension = document.querySelector(".cytokinePart.halfLifeExtensionDomain")),
  (cyanImage = document.querySelector(".cytokinePart.cytokineDomain")),
  (proteaseCleavableLinkers = document.querySelector(".cytokinePart.proteaseCleavableLinkers")),
  (inactivationDomain = document.querySelector(".cytokinePart.inactivationDomain")),
  (buttonPlayReplay = document.querySelector(".begin")),
  (buttonReset = document.querySelector(".reset"));
buttonStart = document.querySelector(".start");
buttonEnd = document.querySelector(".end");

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "circle", duration: 0.5 });

grayScale();

fadeOnMicroEnviro = () => {
  let tl = gsap.timeline();
  tl.fromTo(
    ".membraneAndReceptor",
    {
      scrollTrigger: {
        start: "top bottom",
        marker: false,
      },
      opacity: 0,
      duration: 2,
    },
    { opacity: 1 }
  );
};

let tl = gsap.timeline();
let membraneTrigger = "top bottom";
tl.addLabel("beginning");
tl.pause();
tl.to(".protease", { x: 800, y: -80, duration: 2, opacity: 1, ease: "power1" })
  .to(".protease", { opacity: 0 })
  .to(halfLifeExtension, { x: -200, y: 200, opacity: 0, duration: 2 })
  .to(inactivationDomain, { x: 200, y: 200, opacity: 0, duration: 2 }, "-=2")
  .to(".proteaseCleavableLinkers", { opacity: 0 }, "-=1")
  .to(".deliveryText", { opacity: 1 }, "-=1")
  .to(".cytokine", { y: 150, x: 200, duration: 2, ease: "power1" }, "-=1")
  .to(".membraneAndReceptor", { opacity: 1, y: -20, duration: 3, "z-index": -2 }, "-=2")
  .to(".receptor", { y: -30, duration: 3 }, "-=3")
  .addLabel("end");

buttonPlayReplay.addEventListener("click", () => {
  if ((buttonPlayReplay.innerText = "play")) {
    buttonPlayReplay.innerText = "Replay";
    tl.play("beginning");
  } else {
    buttonPlayReplay.innerText = "restart";
    tl.play("beginning");
  }
});

buttonReset.addEventListener("click", () => {
  tl.seek("beginning");
  tl.pause();
  grayScale();
});

buttonStart.addEventListener("click", () => {
  tl.seek("beginning");
  tl.pause();
  grayScale();
});

buttonEnd.addEventListener("click", () => {
  tl.seek("end");
});
