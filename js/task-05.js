"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const startNameInput = nameOutput.textContent;

console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener("input", onFormInput)

function onFormInput(evt) {
    console.log(evt.currentTarget.value);
    if(evt.currentTarget.value) {
        nameOutput.textContent = evt.currentTarget.value;
        return;
    }
    nameOutput.textContent = startNameInput;
}