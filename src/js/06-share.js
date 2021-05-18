const shareButton = document.querySelector(".js-share-button");

function showLinkShare() {
  const linkShareSection = document.querySelector(".js-link-share");
  linkShareSection.classList.remove("share-hidden");
  shareButton.classList.add("button-share-click");
}

shareButton.addEventListener("click", showLinkShare);
