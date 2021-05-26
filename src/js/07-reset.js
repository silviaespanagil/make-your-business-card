function resetImg() {
  previewImg.setAttribute(
    "style",
    "background-image: url('./assets/images/card-pic.jpg')"
  );

  previewMiniImg.setAttribute("style", "background-image: url()");
}

function resetForm() {
  data = {
    //esto es para vaciar la tarjeta  y que quede por default
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
  };
}
function resetPalette() {
  cardDataPallet.classList.remove("palcol1", "palcol2", "palcol3");
}

function handlerReset() {
  resetForm();
  form.reset(); //esto limpia los inputs sin más
  previewCard(); //re-llama a la funcion preview card de data.js
  resetImg(); //limpia la imagen
  resetPalette();
  localStorage.clear("dataLocal");
  location.reload();
}

resetButton.addEventListener("click", handlerReset);
