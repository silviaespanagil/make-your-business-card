const buttonCreate = document.querySelector(".js-button-create");
const linkCreate = document.querySelector(".js-link-create");
const sectionCreate = document.querySelector(".js-sectionCreated");
const errorCreate = document.querySelector(".js-sectionCreatedError");
const errorMessage = document.querySelector(".js-message-error");
const buttonTwitter = document.querySelector(".js-twitter-button");

function handlerCreateCard(ev) {
  ev.preventDefault();
  for (let info in data) {
    console.log(data[info]);
  }
  if (data.name === "") {
    errorMessage.innerHTML = "Rellena el campo con un nombre.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.job === "") {
    errorMessage.innerHTML = "Rellena el campo del puesto.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.email === "") {
    errorMessage.innerHTML = "Rellena el campo del email.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.phone === "") {
    errorMessage.innerHTML = "Rellena el campo del número de teléfono.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.linkedin === "") {
    errorMessage.innerHTML = "Rellena el campo del usuario de LinkedIn.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.github === "") {
    errorMessage.innerHTML = "Rellena el campo del usuario de GitHub.";
    errorCreate.classList.remove("collapsable-hidden");
  }
  if (data.photo === "") {
    errorMessage.innerHTML = "Tienes que subir una foto.";
    errorCreate.classList.remove("collapsable-hidden");
  } else {
    const url = "https://awesome-profile-cards.herokuapp.com/card";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          linkCreate.innerHTML = data.cardURL;
          linkCreate.href = data.cardURL;
          sectionCreate.classList.remove("collapsable-hidden");
          errorCreate.classList.add("collapsable-hidden");
          buttonCreate.classList.remove("button-share-click-error");
          buttonCreate.classList.add("button-share-click");

          buttonTwitter.href = `https://twitter.com/intent/tweet?text=${textTweet}&url=${data.cardURL}&hashtags=${hashtagsTweet}`;

          buttonCreate.setAttribute("disabled", "disabled");
        } else {
          //errorMessage.innerHTML = data.error;
          errorCreate.classList.remove("collapsable-hidden");
          sectionCreate.classList.add("collapsable-hidden");
          buttonCreate.classList.add("button-share-click-error");
        }
      });
  }
}

function allowButton() {
  buttonCreate.removeAttribute("disabled", "disabled");
  errorCreate.classList.add("collapsable-hidden");
  sectionCreate.classList.add("collapsable-hidden");
  buttonCreate.classList.remove("button-share-click-error");
  buttonCreate.classList.remove("button-share-click");
}

buttonCreate.addEventListener("click", handlerCreateCard);

// Link para compartir en twitter
const textTweet = "Conoce mi tarjeta de presentación";
const hashtagsTweet = "adalab,frontend";
