// Nombre y trabajo

//constantes
//nombre
/*
const nameInput = document.querySelector(".js-nameInput");

//cargo
const jobTitle = document.querySelector(".js-jobTitle");
const jobInput = document.querySelector(".js-job");
const jobDefault = "Ser un perro bello";
//email
const baseEmail = "mailto:";
//teléfono
const baseTelephone = "tel:";
//linkedin
const baseUrlLinkedin = "https://www.linkedin.com/in/";
//github
const baseUrlGitHub = "https://github.com/";*/

//objeto
const data = {
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

const form = document.querySelector(".js-data");
const previewName = document.querySelector(".js-name");
const nameDefault = "Camus Ollo Branco";

function dataForm(ev) {
  const InputAttribute = ev.target.name;
  const userValue = ev.target.value;

  if (InputAttribute === "name") {
    data.name = userValue;
  } else if (InputAttribute === "job") {
    data.job = userValue;
  }
}
form.addEventListener("keyup", dataForm);
/*function changeJob() {
  const jobValue = jobInput.value;
  if (jobValue === "") {
    jobTitle.innerHTML = jobDefault;
  } else {
    jobTitle.innerHTML = jobValue;
  }
}*/

//email
function changeEmail(event) {
  let emailValue = event.target.value;

  let buttonEmail = document.querySelector(".js-buttonEm");
  let userEmail = baseEmail + emailValue;
  buttonEmail.setAttribute("href", userEmail);
}

//teléfono
function changeTelephone(event) {
  let phoneValue = event.target.value;

  let buttonTelephone = document.querySelector(".js-buttonTel");
  let userTelephone = baseTelephone + phoneValue;
  buttonTelephone.setAttribute("href", userTelephone);
}
//linkedin
function changeLinkedin(event) {
  let linkedinValue = event.target.value;

  let buttonLink = document.querySelector(".js-buttonLink");
  let userUrlProfileLink = baseUrlLinkedin + linkedinValue;
  buttonLink.setAttribute("href", userUrlProfileLink);
}
//github
function changeGit(event) {
  let gitValue = event.target.value;
  let buttonGit = document.querySelector(".js-buttonGit");
  let userUrlProfileGithub = baseUrlGitHub + gitValue;
  buttonGit.setAttribute("href", userUrlProfileGithub);
}
