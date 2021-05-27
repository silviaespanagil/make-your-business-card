//photoCard
const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
const defaultImg = "./assets/images/card-pic.jpg";

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  data.photo = fr.result;
  previewImage();
  setlocalHost();
}

function previewImage() {
  if (data.photo === "") {
    profileImage.style.backgroundImage = `url(${defaultImg})`;
  } else {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
