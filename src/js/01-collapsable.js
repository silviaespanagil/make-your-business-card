"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");

// Constantes Flechas Collapsables
const arrow = document.querySelector(".js-arrow");
const collapsableHeader = document.querySelectorAll(".js-collapsable-header");

const collapsableTotal = [collapsableDesign, collapsableFill, collapsableShare];

// Collapsable
function collapsableArrow() {
  /*for (let i = 0; collapsableTotal < i; i++) {
    collapsableTotal[i].classList.toggle("collapsable-hidden");
    arrow.classList.toggle("arrow-rotate");
  }*/
  if (collapsableDesign.classList.contains("collapsable-hidden")) {
    collapsableFill.classList.remove("collapsable-hidden");
    collapsableShare.classList.add("collapsable-hidden");
  } else if (collapsableFill.classList.contains("collapsable-hidden")) {
    collapsableDesign.classList.remove("collapsable-hidden");
    collapsableShare.classList.add("collapsable-hidden");
  }
}

// // Bucle para escuchar cada flecha dentro del colapsable header
for (const arrow of collapsableHeader) {
  arrow.addEventListener("click", collapsableArrow);
}
