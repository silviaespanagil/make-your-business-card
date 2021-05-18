"use strict";

// Constantes Secciones Colapsables
const collapsableDesign = document.querySelector(".js-collapsable-design");
const collapsableFill = document.querySelector(".js-collapsable-fill");
const collapsableShare = document.querySelector(".js-collapsable-share");

// Constante Flechas
const arrows = document.querySelectorAll(".js-arrow");

// Funcion collapsable
function collapsable(event) {
  // constante seccion que debe descollapsar
  const sectionClick = event.target.parentElement.nextElementSibling;

  // Añade clase hidden para ocultar todas las secciones
  collapsableDesign.classList.add("collapsable-hidden");
  collapsableFill.classList.add("collapsable-hidden");
  collapsableShare.classList.add("collapsable-hidden");

  // Quita la clase hidden a la clase clickada para mostrarse
  sectionClick.classList.remove("collapsable-hidden");
}

function rotateArrow(event) {
  const arrowClick = event.target;
  console.log(arrowClick);
  arrowClick.classList.toggle("arrow-rotate");
}

function handlerCollapsable(event) {
  collapsable(event);
  rotateArrow(event);
}

// Bucle para escuchar cada flecha
for (let arrow of arrows) {
  arrow.addEventListener("click", handlerCollapsable);
}
