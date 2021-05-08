"use strict";
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");
const arrow1 = document.querySelector(".js-arrow1");
const arrow2 = document.querySelector(".js-arrow2");
const arrow3 = document.querySelector(".js-arrow3");

function collapsableArrowDesign() {
  collapsableDesign.classList.toggle("collapsable-hidden");
  arrow1.classList.toggle("fa-chevron-up");
  arrow1.classList.toggle("fa-chevron-down");
}
arrow1.addEventListener("click", collapsableArrowDesign);

function collapsableArrowFill() {
  collapsableFill.classList.toggle("collapsable-hidden");
  arrow2.classList.toggle("fa-chevron-up");
  arrow2.classList.toggle("fa-chevron-down");
}
arrow2.addEventListener("click", collapsableArrowFill);

function collapsableArrowShare() {
  collapsableShare.classList.toggle("collapsable-hidden");
  arrow3.classList.toggle("fa-chevron-up");
  arrow3.classList.toggle("fa-chevron-down");
}
arrow3.addEventListener("click", collapsableArrowShare);
