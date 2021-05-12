"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");
// Constantes Flechas Collapsables
const arrow1 = document.querySelector(".js-arrow1");
const arrow2 = document.querySelector(".js-arrow2");
const arrow3 = document.querySelector(".js-arrow3");
// Constante borde inferior collapsables
const borderHeader = document.querySelector(".border-hidden");

// Collapsable Design
function collapsableArrowDesign() {
  collapsableDesign.classList.toggle("collapsable-hidden");
  arrow1.classList.toggle("fa-chevron-up");
  arrow1.classList.toggle("fa-chevron-down");
}
// Collapsable Fill
function collapsableArrowFill() {
  collapsableFill.classList.toggle("collapsable-hidden");
  arrow2.classList.toggle("fa-chevron-up");
  arrow2.classList.toggle("fa-chevron-down");
}
// Collapsable Share
function collapsableArrowShare() {
  collapsableShare.classList.toggle("collapsable-hidden");
  arrow3.classList.toggle("fa-chevron-up");
  arrow3.classList.toggle("fa-chevron-down");
}

// Eventos collapsables
arrow1.addEventListener("click", collapsableArrowDesign);
arrow2.addEventListener("click", collapsableArrowFill);
arrow3.addEventListener("click", collapsableArrowShare);
