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

/*if ($("img").attr("src") == "default.png") {
  alert("please change image");
}*/

function previewImage() {
  console.log(data.photo);
  if (profileImage.src === "") {
    profileImage.src = `${data.photo}`;
    profilePreview.src = `${data.photo}`;
  } else {
    profileImage.src = "./assets/images/card-pic.jpg";
  }
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
