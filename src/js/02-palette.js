// "use strict";

const cardDataPallet = document.querySelector(".preview__card");
const paletteElement = document.querySelector(".collapsable-design__colors");
const paletteSelector = document.querySelector(".radio-class");

function changePaletteColor(event) {
  let target = event.target;
  cardDataPallet.classList.remove("palcol1", "palcol2", "palcol3");
  switch (target.id) {
    case "palette1":
      cardDataPallet.classList.add("palcol1");
      data["palette"] = 1;
      break;
    case "palette2":
      cardDataPallet.classList.add("palcol2");
      data["palette"] = 2;
      break;
    case "palette3":
      cardDataPallet.classList.add("palcol3");
      data["palette"] = 3;
      break;
  }
  setlocalHost();
}
function prevewPalette() {
  if (getlocalData.palette === 1) {
    cardDataPallet.classList.remove("palcol2", "palcol3");
    cardDataPallet.classList.add("palcol1");
  } else if (getlocalData.palette === 2) {
    cardDataPallet.classList.remove("palcol1", "palcol3");
    cardDataPallet.classList.add("palcol2");
  } else if (getlocalData.palette === 3) {
    cardDataPallet.classList.remove("palcol1", "palcol2");
    cardDataPallet.classList.add("palcol3");
  }
}
// getLocalStorage();
paletteElement.addEventListener("click", changePaletteColor);
