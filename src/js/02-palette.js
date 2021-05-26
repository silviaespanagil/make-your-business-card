const cardDataPallet = document.querySelector(".preview__card");
const paletteElement = document.querySelector(".collapsable-design__colors");
const paletteSelector = document.querySelector(".radio-class");
const palettesRadios = document.querySelectorAll(".radio-class");

// for (const paletteRadio of palettesRadios) {
//   if (paletteSelector.value === 3) {
//     paletteRadio.setAttribute("checked", "true");
//   }
// }
const paletteChecked = document.querySelector(".input-checked");
paletteChecked.checked = true;

function changePaletteColor(event) {
  let target = event.target;

  cardDataPallet.classList.remove("palcol1", "palcol2", "palcol3");
  switch (target.id) {
    case "palette1":
      cardDataPallet.classList.add("palcol1", "input-checked");
      data["palette"] = 1;
      // palettesRadios.classList.add("input-checked");
      break;
    case "palette2":
      cardDataPallet.classList.add("palcol2", "input-checked");
      data["palette"] = 2;
      // palettesRadios.classList.add("input-checked");
      break;
    case "palette3":
      cardDataPallet.classList.add("palcol3", "input-checked");
      data["palette"] = 3;
      // palettesRadios.classList.add("input-checked");
      break;
  }
  setlocalHost();
}

function previewPalette() {
  if (data.palette === 1) {
    cardDataPallet.classList.remove("palcol2", "palcol3");
    cardDataPallet.classList.add("palcol1", "pal1");
  } else if (data.palette === 2) {
    cardDataPallet.classList.remove("palcol1", "palcol3");
    cardDataPallet.classList.add("palcol2", "pal2");
  } else if (data.palette === 3) {
    cardDataPallet.classList.remove("palcol1", "palcol2");
    cardDataPallet.classList.add("palcol3", "pal3");
  }
}

paletteElement.addEventListener("click", changePaletteColor);
