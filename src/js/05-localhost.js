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
  console.log(data);
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
    // guardo en el objeto data y repinto
    data = getlocalData;
  }
  previewCard();
  previewImage();
}

getLocalStorage();
// no vuelve a  pintar los datos en el preview. :(
