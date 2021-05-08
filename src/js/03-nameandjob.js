"use strict";
//nombre y apellido .js-name(tarjeta) .js-nameInput (form)
//cargo .js-jobTitle (tarjeta) .js-job (form)

//constantes
//nombre
const fullName = document.querySelector(".js-name");
const nameInput = document.querySelector(".js-nameInput");
//cargo
const jobTitle = document.querySelector(".js-jobTitle");
const jobInput = document.querySelector(".js-job");

function changeNameData() {
  const nameValue = nameInput.value;
  if (nameValue === "") {
    fullName.innerHTML = "Camus Ollo Branco";
  } else {
    fullName.innerHTML = nameValue;
  }
}

function changeJob() {
  const jobValue = jobInput.value;
  if (jobValue === "") {
    jobTitle.innerHTML = "Ser un perro bello";
  } else {
    jobTitle.innerHTML = jobValue;
  }
}

nameInput.addEventListener("keyup", changeNameData);
jobInput.addEventListener("keyup", changeJob);
