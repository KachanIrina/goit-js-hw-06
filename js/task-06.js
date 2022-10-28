"use strict";

const val = document.querySelector("#validation-input");

console.log(val);

val.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
    if(evt.currentTarget.value.length == val.getAttribute(`data-length`)) {       
        val.classList.add(`valid`);  
        val.classList.remove(`invalid`); 
    }
    else {
    val.classList.remove(`valid`); 
    val.classList.add(`invalid`);
    }
}

