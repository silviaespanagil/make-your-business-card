function setlocalHost() {
  localStorage.setItem("dataLocal", JSON.stringify(data));
}
// function paletteRadios() {
//   const palettesRadios = document.querySelectorAll(".radio-class");
//   for (const paletteRadio of palettesRadios) {
//     if (paletteSelector.value === 2) {
//       paletteRadio.setAttribute("checked", "true");
//     }
//   }
// }

//   const paletteElements = document.querySelectorAll(".radio-class");
//   for (const paletteElement of paletteElements) {
//     if (paletteElement.value === getlocalData.palette) {
//       paletteElement.checked = true;
//     }
const checkedPalette = document.querySelector(".radio-class :checked");

let getlocalData = JSON.parse(localStorage.getItem("dataLocal"));
function getLocalStorage() {
  if (getlocalData != null) {
    nameInput.value = getlocalData.name;

    jobInput.value = getlocalData.job;

    emailInput.value = getlocalData.email;

    telephoneInput.value = getlocalData.phone;

    linkedInInput.value = getlocalData.linkedin;

    githubInput.value = getlocalData.github;

    paletteSelector.value = getlocalData.palette;

    previewImg.value = getlocalData.photo;
    // guardo en el objeto data y repinto
    data = getlocalData;
  }
  previewCard();
  previewImage();
  previewPalette();
  // paletteRadios();
}

getLocalStorage();
