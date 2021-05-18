function resetImg() {
  previewImg.setAttribute(
    "style",
    "background-image: url(../assets/images/card-pic.jpg)"
  );
  previewMiniImg.setAttribute("style", "background-image: url()");
}

function resetForm() {
  data = {
    //esto es para vaciar la tarjeta  y que quede por default
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
  };
}

function handlerReset() {
  resetForm();
  form.reset(); //esto limpia los inputs sin más
  previewCard(); //re-llama a la funcion preview card de data.js
  resetImg(); //limpia la imagen
  localStorage.clear("dataLocal");
}
resetButton.addEventListener("click", handlerReset);

//añadir a reset.js un removeLocalStorage
