/*eslint-disable*/
// "use strict";

//variables selectoras de HTML
const paletteElement = document.querySelector(".collapsable-design__colors");

const cardDataNameColor = document.querySelector(".preview__card-data--name");
const cardDataProfColor = document.querySelector(
  ".preview__card-data--jobTitle"
);
const cardDataSocialColor = document.querySelectorAll(
  ".preview__card-socials--items"
);
const cardDataBorderColor = document.querySelector(".preview__card-data");

//variables agrupadas de selectores y colores
const cardDataPallet = [
  cardDataNameColor,
  cardDataProfColor,
  cardDataBorderColor,
  cardDataSocialColor,
];
const colorsPalette1 = [
  "changeNameColor1",
  "changeProfColor1",
  "changeBorderColor1",
  "changeSocialColor1",
];
const colorsPalette2 = [
  "changeNameColor2",
  "changeProfColor2",
  "changeBorderColor2",
  "changeSocialColor2",
];
const colorsPalette3 = [
  "changeNameColor3",
  "changeProfColor3",
  "changeBorderColor3",
  "changeSocialColor3",
];

//funcion para add/remove colores correctos
function setColor(cardData, addPallete, removePallete1, removePallete2) {
  for (let i = 0; i < cardData.length; i++) {
    let cardElement = cardData[i];
    //condicional que evalua si es un array de >1 elemento (para iconos sociales)
    if (cardElement.length > 1) {
      //add/remove for each para entrar en cada una de los iconos dentro de la lista
      cardElement.forEach((element) => element.classList.add(addPallete[i]));
      cardElement.forEach((element) =>
        element.classList.remove(removePallete1[i], removePallete2[i])
      );
      //condicional para el resto de elementos
    } else {
      cardData[i].classList.add(addPallete[i]);
      cardData[i].classList.remove(removePallete1[i], removePallete2[i]);
    }
  }
}
//funcion que aplica los colores por paletas, llamando la funcion setColor
function changePaletteColor(event) {
  let target = event.target;

  switch (target.id) {
    case "palette1":
      setColor(cardDataPallet, colorsPalette1, colorsPalette2, colorsPalette3);
      break;
    case "palette2":
      setColor(cardDataPallet, colorsPalette2, colorsPalette1, colorsPalette3);
      break;
    case "palette3":
      setColor(cardDataPallet, colorsPalette3, colorsPalette1, colorsPalette2);
      break;
  }
}

paletteElement.addEventListener("change", changePaletteColor);
