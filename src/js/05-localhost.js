function setlocalHost() {
  localStorage.setItem("dataLocal", JSON.stringify(data));
}

let getlocalData = JSON.parse(localStorage.getItem("dataLocal"));

function getLocalStorage() {
  if (getlocalData != null) {
    nameInput.value = getlocalData.name;
    jobInput.value = getlocalData.job;
    emailInput.value = getlocalData.email;
    telephoneInput.value = getlocalData.phone;
    linkedInInput.value = getlocalData.linkedin;
    githubInput.value = getlocalData.github;
    // guardo en el objeto data y repinto
    data = getlocalData;
  }
  previewCard();
  previewImage();
  previewPalette();
}

getLocalStorage();
