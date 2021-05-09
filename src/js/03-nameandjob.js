"use strict";
//nombre y apellido .js-name(tarjeta) .js-nameInput (form)
//cargo .js-jobTitle (tarjeta) .js-job (form)

//constantes
//nombre
const fullName = document.querySelector(".js-name");
const nameInput = document.querySelector(".js-nameInput");
const nameDefault = "Camus Ollo Branco";
//cargo
const jobTitle = document.querySelector(".js-jobTitle");
const jobInput = document.querySelector(".js-job");
const jobDefault = "Ser un perro bello";

function changeNameData() {
  const nameValue = nameInput.value;
  if (nameValue === "") {
    fullName.innerHTML = nameDefault;
  } else {
    fullName.innerHTML = nameValue;
  }
}

function changeJob() {
  const jobValue = jobInput.value;
  if (jobValue === "") {
    jobTitle.innerHTML = jobDefault;
  } else {
    jobTitle.innerHTML = jobValue;
  }
}

nameInput.addEventListener("keyup", changeNameData);
jobInput.addEventListener("keyup", changeJob);
