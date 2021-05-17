//formulario
const form = document.querySelector(".js-data");

//nombre
const nameInput = document.querySelector(".js-nameInput");
const previewName = document.querySelector(".js-name");
const nameDefault = "Nombre Apellido";

//cargo
const jobInput = document.querySelector(".js-job");
const previewJob = document.querySelector(".js-jobTitle");
const jobDefault = "Front-end developer";

//email
const defaultEmail = "mailto:";
const previewEmail = document.querySelector(".js-buttonEm");

//teléfono
const defaultTelephone = "tel:";
const previewTel = document.querySelector(".js-buttonTel");

//linkedin
const defaultUrlLinkedin = "https://www.linkedin.com/in/";
const previewLinkedIn = document.querySelector(".js-buttonLink");

//github
const defaultUrlGitHub = "https://github.com/";
const previewGit = document.querySelector(".js-buttonGit");

//reset
const resetButton = document.querySelector(".js-reset");

//objeto
let data = {
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

//funciones

function dataForm(ev) {
  const inputAttribute = ev.target.name;
  const userValue = ev.target.value;
  data[inputAttribute] = userValue;
  console.log(data);
}

function previewCard() {
  previewName.innerHTML = data.name === "" ? nameDefault : data.name;
  previewJob.innerHTML = data.job === "" ? jobDefault : data.job;
  previewEmail.href =
    data.email === "" ? defaultEmail : defaultEmail + data.email;
  previewTel.href =
    data.phone === "" ? defaultTelephone : defaultTelephone + data.phone;
  previewLinkedIn.href =
    data.linkedin === ""
      ? defaultUrlLinkedin
      : defaultUrlLinkedin + data.linkedin;
  previewGit.href =
    data.github === "" ? defaultUrlGitHub : defaultUrlGitHub + data.github;
}

function handlerData(ev) {
  dataForm(ev);
  previewCard();
}

function resetForm() {
  form.reset();
  data = {
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  };
  previewCard();
}

//eventos
form.addEventListener("keyup", handlerData);
resetButton.addEventListener("click", resetForm);
