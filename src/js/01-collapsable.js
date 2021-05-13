/* eslint-disable */

"use strict";

// Constantes Collapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");
// Constantes Flechas Collapsables
const arrow = document.querySelector(".js-arrow");

//Collapsable

function collapsableArrow(a) {
  a.classList.toggle("collapsable-hidden");
  arrow.classList.toggle("arrow-rotate");
}

function handlerCollapsable() {
  collapsableArrow(collapsableDesign);
  collapsableArrow(collapsableFill);
  collapsableArrow(collapsableShare);
}

// Eventos collapsables
arrow.addEventListener("click", handlerCollapsable);
