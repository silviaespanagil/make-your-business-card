'use strict';

const paletteElement = document.querySelector('.collapsable-design__colors');


const cardDataNameColor = document.querySelector('.preview__card-data--name');
// const cardDataNameColor = document.querySelector('.preview__card-data--name');





function changePaletteColor(event) {
  let target = event.target;
  
  switch (target.id) {
    case 'palette1':
      cardDataNameColor.classList.add('changeColor1');
      cardDataNameColor.classList.remove('changeColor2');
      cardDataNameColor.classList.remove('changeColor3');
      break;
    case 'palette2':
      cardDataNameColor.classList.add('changeColor2');
      cardDataNameColor.classList.remove('changeColor1');
      cardDataNameColor.classList.remove('changeColor3');
      break;
    case 'palette3':
      cardDataNameColor.classList.add('changeColor3');
      cardDataNameColor.classList.remove('changeColor1');
      cardDataNameColor.classList.remove('changeColor2');
      break;
  }  
}
paletteElement.addEventListener ('change', changePaletteColor);
