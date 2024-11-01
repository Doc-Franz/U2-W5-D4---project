const header = document.querySelector("header");
const pointer = document.querySelectorAll("ul a");
const changingPoint = 250;

window.addEventListener("scroll", function () {
  const yCoord = window.scrollY;

  if (yCoord > changingPoint) {
    header.classList.add("scrolled");
    pointer[pointer.length - 1].classList.add("greenPointer");
  } else {
    header.classList.remove("scrolled");
    pointer[pointer.length - 1].classList.remove("greenPointer");
  }
});
