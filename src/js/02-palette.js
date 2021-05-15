/*eslint-disable*/
// "use strict";

const paletteElement = document.querySelector(".collapsable-design__colors");

const cardDataNameColor = document.querySelector(".preview__card-data--name");
const cardDataProfColor = document.querySelector(
  ".preview__card-data--jobTitle"
);
const cardDataSocialColor = document.querySelectorAll(
  ".preview__card-socials--items"
);
const cardDataBorderColor = document.querySelector(".preview__card-data");

const cardDataPallet =
  (cardDataNameColor, cardDataProfColor, cardDataBorderColor);
const colorsPalette1 = (changeNameColor1, changeProfColor1, changeBorderColor1);
const colorsPalette2 =
  ("changeNameColor2", "changeProfColor2", "changeBorderColor2");
const colorsPalette3 =
  ("changeNameColor3", "changeProfColor3", "changeBorderColor3");
console.log(colorsPalette1);
function setColor(cardElement, addPallet, removePallet1, removePallet2) {
  cardElement.classList.add(addPallet);
  cardElement.classList.remove(removePallet1, removePallet2);
}

function changePaletteColor(event) {
  let target = event.target;

  switch (target.id) {
    case "palette1":
      setColor(cardDataPallet, colorsPalette1, colorsPalette2, colorsPalette3);

      // cardDataProfColor.classList.add("changeProfColor1");
      // cardDataProfColor.classList.remove(
      //   "changeProfColor2",
      //   "changeProfColor3"
      // );

      // cardDataBorderColor.classList.add("changeBorderColor1");
      // cardDataBorderColor.classList.remove(
      //   "changeBorderColor2",
      //   "changeBorderColor3"
      // );

      cardDataSocialColor.forEach((element) =>
        element.classList.add("changeSocialColor1")
      );
      cardDataSocialColor.forEach((element) =>
        element.classList.remove("changeSocialColor2", "changeSocialColor3")
      );
      break;
    case "palette2":
      setColor(cardDataPallet, colorsPalette2, colorsPalette1, colorsPalette3);
      // cardDataNameColor.classList.add("changeNameColor2");
      // cardDataNameColor.classList.remove(
      //   "changeNameColor3",
      //   "changeNameColor1"
      // );

      // cardDataProfColor.classList.add("changeProfColor2");
      // cardDataProfColor.classList.remove(
      //   "changeProfColor1",
      //   "changeProfColor3"
      // );

      // cardDataBorderColor.classList.add("changeBorderColor2");
      // cardDataBorderColor.classList.remove(
      //   "changeBorderColor1",
      //   "changeBorderColor3"
      // );

      cardDataSocialColor.forEach((element) =>
        element.classList.add("changeSocialColor2")
      );
      cardDataSocialColor.forEach((element) =>
        element.classList.remove("changeSocialColor1", "changeSocialColor3")
      );
      break;
    case "palette3":
      setColor(cardDataPallet, colorsPalette3, colorsPalette1, colorsPalette2);
      // cardDataNameColor.classList.add("changeNameColor3");
      // cardDataNameColor.classList.remove(
      //   "changeNameColor1",
      //   "changeNameColor2"
      // );

      // cardDataProfColor.classList.add("changeProfColor3");
      // cardDataProfColor.classList.remove(
      //   "changeProfColor1",
      //   "changeProfColor2"
      // );

      // cardDataBorderColor.classList.add("changeBorderColor3");
      // cardDataBorderColor.classList.remove(
      //   "changeBorderColor1",
      //   "changeBorderColor2"
      // );

      cardDataSocialColor.forEach((element) =>
        element.classList.add("changeSocialColor3")
      );
      cardDataSocialColor.forEach((element) =>
        element.classList.remove("changeSocialColor1", "changeSocialColor2")
      );
      break;
  }
}
paletteElement.addEventListener("change", changePaletteColor);
