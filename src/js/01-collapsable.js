"use strict";

// Constante Secciones Colapsables
const collapsableSections = document.querySelectorAll(".js-collapsable");
// Constante Flechas
const arrows = document.querySelectorAll(".js-arrow");
// Constante Cabeceras
const headers = document.querySelectorAll(".js-collapsable-header");

function handleCollapsibles(event) {
  const sectionClick = event.currentTarget.nextElementSibling;
  const headerClick = event.currentTarget;
  for (const collapsableSection of collapsableSections) {
    if (collapsableSection === sectionClick) {
      collapsableSection.classList.toggle("collapsable-hidden");
      for (const arrow of arrows) {
        if (arrow.parentNode === headerClick) {
          arrow.classList.toggle("rotate");
        } else {
          arrow.classList.remove("rotate");
        }
      }
    } else {
      collapsableSection.classList.add("collapsable-hidden");
    }
  }
}

// Bucle para escuchar cada header
for (let header of headers) {
  header.addEventListener("click", handleCollapsibles);
}
