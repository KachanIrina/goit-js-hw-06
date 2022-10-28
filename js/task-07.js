"use strict";

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(fontSizeControl);
console.log(text);



fontSizeControl.addEventListener(`click`, changeText);

function changeText(evt) {
    text.style.fontSize = `${Number(fontSizeControl.value)}px`;
}
