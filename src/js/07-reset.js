function resetImg() {
  previewImg.setAttribute(
    "style",
    "background-image: url(./assets/images/card-pic.jpg)"
  );
  previewMiniImg.setAttribute("style", "background-image: url()");
}

function resetForm() {
  form.reset(); //esto limpia los inputs sin más
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
  previewCard();
  resetImg();
}
resetButton.addEventListener("click", resetForm);
