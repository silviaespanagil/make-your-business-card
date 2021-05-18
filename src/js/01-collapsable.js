"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");

// Constantes Flechas Collapsables
const arrows = document.querySelectorAll(".js-arrow");
const collapsableHeader = document.querySelectorAll(".js-collapsable-header");

const collapsableTotal = [collapsableDesign, collapsableFill, collapsableShare];

// Collapsable
function collapsableArrow(event) {
  console.log(event.target.parentElement);
  const sectionToCollapse = event.target.parentElement.nextElementSibling;

  collapsableDesign.classList.add("collapsable-hidden");
  collapsableFill.classList.add("collapsable-hidden");
  collapsableShare.classList.add("collapsable-hidden");
  sectionToCollapse.classList.remove("collapsable-hidden");
}

// // Bucle para escuchar cada flecha
for (const arrow of arrows) {
  arrow.addEventListener("click", collapsableArrow);
}
