const buttonCreate = document.querySelector(".js-button-create");
const linkCreate = document.querySelector(".js-link-create");
const sectionCreate = document.querySelector(".js-sectionCreated");
const errorCreate = document.querySelector(".js-sectionCreatedError");
const errorMessage = document.querySelector(".js-message-error");
const buttonTwitter = document.querySelector(".js-twitter-button");

function handlerCreateCard(ev) {
  ev.preventDefault();
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
        buttonCreate.classList.add("button-share-click");

        buttonTwitter.href = `https://twitter.com/intent/tweet?text=${textTweet}&url=${data.cardURL}&hashtags=${hashtagsTweet}`;
      } else {
        errorMessage.innerHTML = `Revisa los siguientes campos:<br> ${data.error}`;
        errorCreate.classList.remove("collapsable-hidden");
        sectionCreate.classList.add("collapsable-hidden");
        buttonCreate.classList.add("button-share-click");
      }
    });
}

buttonCreate.addEventListener("click", handlerCreateCard);

// Link para compartir en twitter
const textTweet =
  "Conoce mi tarjeta profesional para la semana de la empleabilidad de Adalab";
const hashtagsTweet = "adalab,frontend";
