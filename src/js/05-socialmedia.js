"use strict";
//CONSTANTES:

//email
const baseEmail = "mailto:";

function changeEmail(event) {
  let emailValue = event.target.value;

  let buttonEmail = document.querySelector(".js-buttonEm");
  let userEmail = baseEmail + emailValue;
  buttonEmail.setAttribute("href", userEmail);
}
//teléfono
const baseTelephone = "tel:";

function changeTelephone(event) {
  let telephoneValue = event.target.value;

  let buttonTelephone = document.querySelector(".js-buttonTel");
  let userTelephone = baseTelephone + telephoneValue;
  buttonTelephone.setAttribute("href", userTelephone);
}
//linkedin
const baseUrlLinkedin = "https://www.linkedin.com/in/";

function changeLinkedin(event) {
  let linkedinValue = event.target.value;

  let buttonLink = document.querySelector(".js-buttonLink");
  let userUrlProfileLink = baseUrlLinkedin + linkedinValue;
  buttonLink.setAttribute("href", userUrlProfileLink);
}
//github

const baseUrlGitHub = "https://github.com/";

function changeGit(event) {
  //console.log("changeGit", event);
  //lo estoy haciendo capturando el valor del evento:
  let gitValue = event.target.value;
  //console.log("gitValue", gitValue);
  //se puede hacer buscando el elemento por id para obtener su valor:
  //let gitInput = document.getElementById("github").value;
  //console.log("gitInput", gitInput);
  let buttonGit = document.querySelector(".js-buttonGit");
  let userUrlProfileGithub = baseUrlGitHub + gitValue;
  buttonGit.setAttribute("href", userUrlProfileGithub);
}

//se puede resumir en:
//
/*function changeGit(event) {
    let buttonGit = document.querySelector(".js-buttonGit");
    buttonGit.setAttribute("href", event.target.value);
  }
  (si pegara todo el url de mi perfil de github)
  */
