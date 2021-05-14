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

form.addEventListener("keyup", handlerData);

/* if (inputAttribute === "name") {
  data.name = userValue;}

  } else if (inputAttribute === "job") {
    data.job = userValue;
  }
}

/*
  const jobValue = jobInput.value;
  if (jobValue === "") {
    jobTitle.innerHTML = jobDefault;
  } else {
    jobTitle.innerHTML = jobValue;
  }
}

//email
function changeEmail(event) {
  let emailValue = event.target.value;

  let buttonEmail = document.querySelector(".js-buttonEm");
  let userEmail = baseEmail + emailValue;
  buttonEmail.setAttribute("href", userEmail);
}

//linkedin
function changeLinkedin(event) {
  let linkedinValue = event.target.value;

  let userUrlProfileLink = baseUrlLinkedin + linkedinValue;
  buttonLink.setAttribute("href", userUrlProfileLink);
}*/
