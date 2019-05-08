import { TweenMax } from "gsap"

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "150px",
  height: "150px",
  x: "150px",
  y: "150px"
})

document.addEventListener("click", () => {
  TweenMax.to("#box", 0.5, {
    rotation: "+=45"
  })
})

