/* eslint-disable indent */
'use strict';

const paletteElement = document.querySelector('.collapsable-design__colors');


const cardDataNameColor = document.querySelector('.preview__card-data--name');
const cardDataProfColor = document.querySelector('.preview__card-data--jobTitle');
const cardDataSocialColor = document.querySelector('.preview__card-socials--items');



function changePaletteColor(event) {
  let target = event.target;
  switch (target.id) {
    case 'palette1':
      cardDataNameColor.classList.add('changeColor1');
      cardDataNameColor.classList.remove('changeColor2', 'changeColor3');

      cardDataProfColor.classList.add('changeColor1');
      cardDataProfColor.classList.remove('changeColor2', 'changeColor3');

      cardDataSocialColor.classList.add('changeColor1');
      cardDataSocialColor.classList.remove('changeColor2', 'changeColor3');
      break;
    case 'palette2':
      cardDataNameColor.classList.add('changeColor2');
      cardDataNameColor.classList.remove('changeColor1', 'changeColor3');

      cardDataProfColor.classList.add('changeColor2');
      cardDataProfColor.classList.remove('changeColor1', 'changeColor3');

      cardDataSocialColor.classList.add('changeColor2');
      cardDataSocialColor.classList.remove('changeColor1', 'changeColor3');
      break;
    case 'palette3':
      cardDataNameColor.classList.add('changeColor3');
      cardDataNameColor.classList.remove('changeColor1', 'changeColor2');

      cardDataProfColor.classList.add('changeColor3');
      cardDataProfColor.classList.remove('changeColor1', 'changeColor2');

      cardDataSocialColor.classList.add('changeColor3');
      cardDataSocialColor.classList.remove('changeColor1', 'changeColor2');
      break;
  }
}
paletteElement.addEventListener ('change', changePaletteColor);

