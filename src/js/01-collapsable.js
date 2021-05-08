"use strict";

const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");
const arrowUp = document.querySelector(".fa-chevron-up");
const arrowDown = document.querySelector(".fa-chevron-down");

function collapsableArrowDesign() {
  if (collapsableDesign.classList.contains("collapsable-hidden")) {
    collapsableDesign.classList.toggle("collapsable-hidden");
    arrowDown.classList.toggle("fa-chevron-up");
  } else {
    collapsableDesign.classList.toggle("collapsable-hidden");
    arrowDown.classList.toggle("fa-chevron-up");
  }
}
arrowUp.addEventListener("click", collapsableArrowDesign);
arrowDown.addEventListener("click", collapsableArrowDesign);

function collapsableArrowFill() {
  if (collapsableFill.classList.contains("collapsable-hidden")) {
    collapsableFill.classList.toggle("collapsable-hidden");
    arrowUp.classList.toggle("fa-chevron-up");
  } else {
    collapsableFill.classList.toggle("collapsable-hidden");
    arrowUp.classList.toggle("fa-chevron-up");
  }
}
arrowUp.addEventListener("click", collapsableArrowFill);
arrowDown.addEventListener("click", collapsableArrowFill);

function collapsableArrowShare() {
  if (collapsableShare.classList.contains("collapsable-hidden")) {
    collapsableShare.classList.toggle("collapsable-hidden");
    arrowUp.classList.toggle("fa-chevron-down");
  } else {
    collapsableShare.classList.toggle("collapsable-hidden");
    arrowUp.classList.toggle("fa-chevron-down");
  }
}
arrowUp.addEventListener("click", collapsableArrowShare);
arrowDown.addEventListener("click", collapsableArrowShare);
