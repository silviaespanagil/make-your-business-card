"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");

// Constantes Flechas Collapsables
const arrow = document.querySelector(".js-arrow");
const collapsableHeader = document.querySelectorAll(".js-collapsable-header");

// Collapsable
function collapsableArrow(a) {
  a.classList.toggle("collapsable-hidden");
  arrow.classList.toggle("arrow-rotate");
}

function handlerCollapsable() {
  collapsableArrow(collapsableDesign);
  collapsableArrow(collapsableFill);
  collapsableArrow(collapsableShare);
}

// // Bucle para escuchar cada flecha dentro del colapsable header
// for (const element of section) {
//   arrow.addEventListener("click", handlerCollapsable);
// }

// //¿Cómo escuchamos el evento sobre el elemento header? ¿Con event.target, solo con el bucle...?
