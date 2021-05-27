//photoCard
const previewImg = document.querySelector(".js__profile-image");
const defaultImg = "url('../images/card-pic.jpg')";

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

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
    profileImage.src = "./assets/images/card-pic.jpg";
  } else {
    profileImage.src = `${data.photo}`;
    profilePreview.src = `${data.photo}`;
  }
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
