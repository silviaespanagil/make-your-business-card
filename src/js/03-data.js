//constantes

//formulario

const form = document.querySelector(".js-data");

//nombre

const nameInput = document.querySelector(".js-nameInput");
const previewName = document.querySelector(".js-name");
const nameDefault = "Camus Ollo Branco";

//cargo
const jobInput = document.querySelector(".js-job");
const previewJob = document.querySelector(".js-jobTitle");
const jobDefault = "Ser un perro bello";

//email
const baseEmail = "mailto:";
//teléfono
const baseTelephone = "tel:";
//linkedin
const baseUrlLinkedin = "https://www.linkedin.com/in/";
//github
const baseUrlGitHub = "https://github.com/";

//objeto
const data = {
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

function dataForm(ev) {
  const inputAttribute = ev.target.name;
  const userValue = ev.target.value;
  data[inputAttribute] = userValue;
  console.log(data);
}

function previewCard() {}
function handlerData(ev) {
  dataForm(ev);
  previewCard();
}

form.addEventListener("keyup", dataForm);

/* if (inputAttribute === "name") {
    data.name = userValue; //data.name (o cualquier data.atributo podría ser data [inputAttribute] porque son iguales. Entonces puedo quitar todos los ifses
  } else if (inputAttribute === "job") {
    data.job = userValue;
  }
}
function previewCard() {}
function handlerData(ev) {
  dataForm(ev), previewCard();
}


/*function changeJob() {
  function handlerData(){}
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
