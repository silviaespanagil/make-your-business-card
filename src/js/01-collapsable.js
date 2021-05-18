"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");

// Constante Flechas Collapsables
const arrows = document.querySelectorAll(".js-arrow");

// Collapsable
function collapsableArrow(event) {
  console.log(event.target.parentElement);
  const sectionToCollapse = event.target.parentElement.nextElementSibling;
  console.log(event.target.parentElement.nextElementSibling);

  collapsableDesign.classList.add("collapsable-hidden");
  collapsableFill.classList.add("collapsable-hidden");
  collapsableShare.classList.add("collapsable-hidden");
  sectionToCollapse.classList.remove("collapsable-hidden");

  arrows.classList.toggle("arrow-rotate");
}

// // Bucle para escuchar cada flecha
for (let arrow of arrows) {
  arrow.addEventListener("click", collapsableArrow);
}
