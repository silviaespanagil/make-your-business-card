const buttonCreate = document.querySelector(".js-button-create");
const linkCreate = document.querySelector(".js-link-create");
const sectionCreate = document.querySelector(".js-sectionCreated");
const errorCreate = document.querySelector(".js-sectionCreatedError");
const errorMessage = document.querySelector(".js-message-error");

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
      } else {
        errorMessage.innerHTML = `Revisa los siguientes campos:<br> ${data.error}`;
        errorCreate.classList.remove("collapsable-hidden");
        sectionCreate.classList.add("collapsable-hidden");
      }
    });
}

buttonCreate.addEventListener("click", handlerCreateCard);
