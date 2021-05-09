'use strict';

const radioElement = document.querySelector('.collapsable-design__colors--palettes');
const cardPreviewElement = document.querySelector('.preview');
// const palette1 = document.querySelector('.palette-1');
// const palette2 = document.querySelector('.palette-2');
// const palette3 = document.querySelector('.palette-3');

function changePaletteColor(event) {
  let target = event.target;
  let cardDataNameColor = document.getElementsByClassName(".preview__card-data--name");
  switch (target.id) {
  case 'palette1':
    // getComputedStyle(cardPreviewElement)
    //   .getPropertyValue('.preview__card-data');
    cardDataNameColor.documentElement.style
      .setProperty('color', 'pink');
    // cardDataNameColor.style.color = 'blue';
    break;
  case 'palette2':
    palette2.classList.add('changeColor2');
    break;
  case 'palette3':
    palette3.classList.add('changeColor3');
    break;
  }
}
radioElement.addEventListener ('change', changePaletteColor);
