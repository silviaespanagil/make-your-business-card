//objeto
/*let data = {
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
  palette: "",
};*/
function setlocalHost() {
  localStorage.setItem("dataLocal", JSON.stringify(data));
}

function getLocalStorage() {
  let getlocalData = JSON.parse(localStorage.getItem("dataLocal"));
  console.log(getlocalData);

  if (getlocalData != null) {
    nameInput.value = getlocalData.name;

    jobInput.value = getlocalData.job;

    emailInput.value = getlocalData.email;

    telephoneInput.value = getlocalData.phone;

    linkedInInput.value = getlocalData.linkedin;

    githubInput.value = getlocalData.github;

    previewImg.value = getlocalData.photo;

    // paletteSelector.value = getlocalData.palette;
  }
}

form.addEventListener("change", setlocalHost);
getLocalStorage();
//previewCard(); no vuelve a  pintar los datos en el preview. :(
