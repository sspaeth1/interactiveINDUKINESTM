grayScale = () => {
  gsap.defaults({ ease: "circle", duration: 0.8 });

  let tl = gsap.timeline();
  tl.from(
    [
      halfLifeExtension.firstElementChild,
      cyanImage.firstElementChild,
      inactivationDomain.firstElementChild,
      proteaseCleavableLinkers.firstElementChild,
    ],
    { transform: "scale(.7)", y: 50, filter: "grayscale(1)", stagger: 0.2 }
  );
  tl.to(
    [
      halfLifeExtension.firstElementChild,
      cyanImage.firstElementChild,
      inactivationDomain.firstElementChild,
      proteaseCleavableLinkers.firstElementChild,
    ],
    { transform: "scale(1)", filter: "grayscale(0)", stagger: 0.2 }
  );
  return tl;
};
