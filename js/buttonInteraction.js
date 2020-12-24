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
  grayScale(molecules);
});

buttonStart.addEventListener("click", () => {
  tl.seek("beginning");
  tl.pause();
  grayScale(molecules);
});

buttonEnd.addEventListener("click", () => {
  tl.seek("end");
});
