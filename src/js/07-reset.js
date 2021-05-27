function handlerReset() {
  localStorage.clear("dataLocal");
  location.reload();
}

resetButton.addEventListener("click", handlerReset);
